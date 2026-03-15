import { prisma } from "../lib/prisma.js";

type MatchBreakdown = {
  score: number;
  winProbability: number;
};

function normalize(value?: string | null) {
  return value?.trim().toLowerCase() ?? "";
}

function includesNormalized(left?: string | null, right?: string | null) {
  const a = normalize(left);
  const b = normalize(right);
  return Boolean(a && b && (a.includes(b) || b.includes(a)));
}

function hasEligibilityConflict(student: {
  country: string;
  state: string;
  gender: string | null;
  ethnicity: string | null;
}, scholarship: {
  countryRequired: string | null;
  stateRequired: string | null;
  genderRequired: string | null;
  ethnicityRequired: string | null;
}) {
  if (scholarship.countryRequired && !includesNormalized(student.country, scholarship.countryRequired)) {
    return true;
  }

  if (scholarship.genderRequired && !includesNormalized(student.gender, scholarship.genderRequired)) {
    return true;
  }

  if (scholarship.ethnicityRequired && !includesNormalized(student.ethnicity, scholarship.ethnicityRequired)) {
    return true;
  }

  return false;
}

function calculateScore(student: {
  gpa: number;
  majorInterest: string;
  state: string;
  financialNeed: boolean;
  gender: string | null;
  ethnicity: string | null;
  activities: string[];
}, scholarship: {
  gpaMin: number | null;
  majorRequired: string | null;
  stateRequired: string | null;
  financialNeedRequired: boolean;
  genderRequired: string | null;
  ethnicityRequired: string | null;
  description: string;
  title: string;
  estimatedApplicants: number;
  numberOfWinners: number;
}): MatchBreakdown {
  let score = 0;

  if (scholarship.gpaMin !== null && student.gpa >= scholarship.gpaMin) {
    score += 30;
  }

  if (scholarship.majorRequired && includesNormalized(student.majorInterest, scholarship.majorRequired)) {
    score += 25;
  }

  if (scholarship.stateRequired && includesNormalized(student.state, scholarship.stateRequired)) {
    score += 15;
  }

  if (student.financialNeed && scholarship.financialNeedRequired) {
    score += 10;
  }

  const demographicMatch =
    (scholarship.genderRequired && includesNormalized(student.gender, scholarship.genderRequired)) ||
    (scholarship.ethnicityRequired && includesNormalized(student.ethnicity, scholarship.ethnicityRequired));

  if (demographicMatch) {
    score += 10;
  }

  const scholarshipText = `${scholarship.title} ${scholarship.description}`.toLowerCase();
  const extracurricularMatch = student.activities.some((activity) => scholarshipText.includes(activity.toLowerCase()));

  if (extracurricularMatch) {
    score += 10;
  }

  const baseProbability = scholarship.numberOfWinners / Math.max(1, scholarship.estimatedApplicants);
  const winProbability = Number((baseProbability * (score / 100)).toFixed(4));

  return {
    score,
    winProbability
  };
}

export async function runMatchForUser(userId: string) {
  const student = await prisma.studentProfile.findUnique({
    where: { userId }
  });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  const scholarships = await prisma.scholarship.findMany({
    orderBy: {
      deadline: "asc"
    }
  });

  const qualifying = scholarships
    .filter((scholarship) => !hasEligibilityConflict(student, scholarship))
    .map((scholarship) => ({
      scholarship,
      ...calculateScore(student, scholarship)
    }))
    .filter((result) => result.score > 50);

  await Promise.all(
    qualifying.map((result) =>
      prisma.match.upsert({
        where: {
          studentId_scholarshipId: {
            studentId: student.id,
            scholarshipId: result.scholarship.id
          }
        },
        update: {
          matchScore: result.score,
          winProbability: result.winProbability
        },
        create: {
          studentId: student.id,
          scholarshipId: result.scholarship.id,
          matchScore: result.score,
          winProbability: result.winProbability
        }
      })
    )
  );

  return prisma.match.findMany({
    where: {
      studentId: student.id
    },
    include: {
      scholarship: true
    },
    orderBy: [
      { matchScore: "desc" },
      { scholarship: { deadline: "asc" } }
    ]
  });
}

export async function getMatchResults(userId: string) {
  const student = await prisma.studentProfile.findUnique({ where: { userId } });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  return prisma.match.findMany({
    where: {
      studentId: student.id
    },
    include: {
      scholarship: true
    },
    orderBy: [
      { matchScore: "desc" },
      { scholarship: { deadline: "asc" } }
    ]
  });
}