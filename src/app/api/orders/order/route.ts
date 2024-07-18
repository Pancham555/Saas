import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const orderId = searchParams.get("orderId") ?? undefined;

  const data = await prisma.order.findUnique({
    where: { id: orderId },
    include: { items: true },
  });

  return NextResponse.json({ data });
}
