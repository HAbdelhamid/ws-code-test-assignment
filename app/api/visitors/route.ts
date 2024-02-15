import { headers } from "next/headers";
import prisma from "../../utils/db";

export async function GET() {
  try {
    const visits = await prisma.visits.count();

    return Response.json({ count: visits });
  } catch (err) {
    console.log("Error getting visits count: ", err);
    return null;
  }
}

export const dynamic = "force-dynamic";
