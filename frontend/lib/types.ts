export type StudentProfile = {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  gpa: number;
  majorInterest: string;
  state: string;
  country: string;
  gender: string | null;
  ethnicity: string | null;
  financialNeed: boolean;
  firstGeneration: boolean;
  activities: string[];
  createdAt: string;
};

export type Scholarship = {
  id: string;
  title: string;
  organization: string;
  amount: number;
  description: string;
  deadline: string;
  gpaMin: number | null;
  majorRequired: string | null;
  stateRequired: string | null;
  countryRequired: string | null;
  genderRequired: string | null;
  ethnicityRequired: string | null;
  financialNeedRequired: boolean;
  essayRequired: boolean;
  estimatedApplicants: number;
  numberOfWinners: number;
  applicationUrl: string;
  createdAt: string;
};

export type Match = {
  id: string;
  scholarshipId: string;
  studentId: string;
  matchScore: number;
  winProbability: number;
  saved: boolean;
  applied: boolean;
  createdAt: string;
  scholarship: Scholarship;
};

export type Application = {
  id: string;
  scholarshipId: string;
  studentId: string;
  status: "Saved" | "Applying" | "Submitted";
  submittedAt: string | null;
  notes: string | null;
  scholarship: Scholarship;
};

export type EssayRequest = {
  id: string;
  prompt: string;
  essayText: string;
  aiFeedback: string;
  createdAt: string;
};

export type AuthUser = {
  id: string;
  email: string;
  studentProfile?: StudentProfile | null;
};