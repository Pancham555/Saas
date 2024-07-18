import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { userId, inventoryId } = await req.json();
  if (!userId || !inventoryId) {
    return NextResponse.json({ message: "Insufficient data!" });
  }
  const data = await prisma.user.update({
    where: { kindeId: userId },
    data: {
      inventory: {
        delete: {
          id: inventoryId,
        },
      },
    },
  });

  return NextResponse.json({ data });
}
