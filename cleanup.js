const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * this a cron job that runs every 30 seconds to delete outdated entries in visitors.
 */
async function deleteOutdatedEntries() {
  const ONE_MINUTE_AGO = new Date(Date.now() - 60 * 1000);
  const result = await prisma.visits.deleteMany({
    where: {
      updatedAt: { lt: ONE_MINUTE_AGO },
    },
  });
  console.log(`${result.count} outdated entries deleted.`);
}

setInterval(() => {
  console.log("Running cleanup job...");
  deleteOutdatedEntries()
    .catch(console.error)
    .finally(async () => {
      await prisma.$disconnect();
    });
}, 60 * 1000);
