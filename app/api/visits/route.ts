import prisma from "../../utils/db";

// user calls this API endpoint to increment the count of visits
export async function POST(req: Request) {
  const ip = req.headers.get("X-Forwarded-For");

  if (!ip) {
    return new Response(`No IP Found`, {
      status: 401,
    });
  }

  try {
    const visit = await prisma.visits.findUnique({
      where: { ip },
    });

    if (visit) {
      await prisma.visits.update({
        where: { ip },
        data: { updatedAt: new Date() },
      });
    } else {
      await prisma.visits.create({
        data: {
          createdAt: new Date(),
          updatedAt: new Date(),
          ip,
        },
      });
    }

    return new Response("Success!", {
      status: 200,
    });
  } catch (error: any) {
    return new Response(`Error updating/creating visit: ${error.message}`, {
      status: 400,
    });
  }
}

export const dynamic = "force-dynamic";
