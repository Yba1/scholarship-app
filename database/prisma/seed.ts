import { config } from "dotenv";

config({ path: "../../.env" });
config({ path: "../.env" });

import { PrismaClient } from "../../backend/src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Discovery now populates scholarships dynamically, so we keep seed data empty
  // instead of inserting demo records with placeholder links.
  await prisma.$queryRaw`SELECT 1`;
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
