import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Starting to seed database with 100,000 posts...");

  // Track progress
  const batchSize = 1000;
  const totalRecords = 100000;
  const batches = totalRecords / batchSize;

  for (let i = 0; i < batches; i++) {
    const start = i * batchSize;
    const end = start + batchSize;

    console.log(
      `Seeding batch ${i + 1}/${batches} (records ${start + 1}-${end})`
    );

    const data = Array.from({ length: batchSize }).map((_, index) => ({
      title: `Sample Post Title ${start + index + 1}`,
      content: `This is the content for sample post number ${
        start + index + 1
      }. It contains some sample text for demonstration purposes.`,
    }));

    // Use createMany for better performance with bulk inserts
    await prisma.post.createMany({
      data,
      skipDuplicates: true, // Optional: skip duplicates if you have unique constraints
    });

    console.log(`Completed batch ${i + 1}/${batches}`);
  }

  console.log("Seeding completed successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error during seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
