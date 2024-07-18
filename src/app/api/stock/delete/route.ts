import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { userId, stockId } = await req.json();
  if (!userId || !stockId) {
    return NextResponse.json({ message: "Insufficient data!" });
  }
  const data = await prisma.user.update({
    where: { kindeId: userId },
    data: {
      stock: {
        delete: {
          id: stockId,
        },
      },
    },
  });

  return NextResponse.json({ data });
}
