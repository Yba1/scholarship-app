import { PrismaClient } from "../../backend/src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const scholarships = [
    {
      title: "Future Engineers Merit Scholarship",
      organization: "STEM Forward",
      amount: 5000,
      description:
        "Supports students pursuing engineering or applied science degrees with a strong academic record and leadership in robotics, coding, or makerspaces.",
      deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 21),
      gpaMin: 3.4,
      majorRequired: "engineering",
      stateRequired: "CA",
      countryRequired: "USA",
      genderRequired: null,
      ethnicityRequired: null,
      financialNeedRequired: false,
      essayRequired: true,
      estimatedApplicants: 600,
      numberOfWinners: 12,
      applicationUrl: "https://example.org/future-engineers"
    },
    {
      title: "First Generation Achievers Grant",
      organization: "College Access Fund",
      amount: 3500,
      description:
        "Designed for first-generation college students who demonstrate financial need, community service, and persistence through academic challenges.",
      deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
      gpaMin: 3,
      majorRequired: null,
      stateRequired: null,
      countryRequired: "USA",
      genderRequired: null,
      ethnicityRequired: null,
      financialNeedRequired: true,
      essayRequired: true,
      estimatedApplicants: 900,
      numberOfWinners: 25,
      applicationUrl: "https://example.org/first-generation-achievers"
    },
    {
      title: "California Computer Science Scholars",
      organization: "Golden State Tech Alliance",
      amount: 8000,
      description:
        "Scholarship for California students focused on computer science, software development, cybersecurity, or data science with hackathon or coding club experience.",
      deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      gpaMin: 3.5,
      majorRequired: "computer science",
      stateRequired: "CA",
      countryRequired: "USA",
      genderRequired: null,
      ethnicityRequired: null,
      financialNeedRequired: false,
      essayRequired: false,
      estimatedApplicants: 450,
      numberOfWinners: 15,
      applicationUrl: "https://example.org/ca-computer-science"
    }
  ];

  for (const scholarship of scholarships) {
    await prisma.scholarship.upsert({
      where: {
        title_organization: {
          title: scholarship.title,
          organization: scholarship.organization
        }
      },
      update: scholarship,
      create: scholarship
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });