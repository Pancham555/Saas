import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { userId, orderId } = await req.json();
  if (!userId || !orderId) {
    return NextResponse.json({ message: "Insufficient data!" });
  }
  const data = await prisma.user.update({
    where: { kindeId: userId },
    data: {
      orders: {
        delete: {
          id: orderId,
        },
      },
    },
  });

  return NextResponse.json({ data });
}
