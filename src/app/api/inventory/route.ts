import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const skip = Number(searchParams.get("skip")) ?? undefined;
  const take = Number(searchParams.get("take")) ?? 10;
  if (!userId) {
    return NextResponse.json({ message: "User Id not provided!" });
  }
  const id = await prisma.user.findUnique({
    where: { kindeId: userId },
  });
  const data = await prisma.inventory.findMany({
    where: { userId: id?.id },
    skip,
    take,
  });
  const count = await prisma.inventory.count({
    where: {
      userId: id?.id,
    },
  });
  const total = await prisma.inventory.aggregate({
    where: {
      userId: id?.id,
    },
    _sum: {
      total: true,
    },
  });

  return NextResponse.json({
    data: { data: data, count, total: total._sum.total },
  });
}

export async function POST(req: NextRequest) {
  const { name, price, quantity, payment_status, createdAt, userId } =
    await req.json();
  if (!name || !price || !quantity || !payment_status || !userId) {
    return NextResponse.json({ message: "Insufficient data!" });
  }

  const insert = await prisma.user.update({
    where: { kindeId: userId },
    data: {
      inventory: {
        create: {
          name,
          price: Number(price),
          quantity: Number(quantity),
          payment_status,
          total: Number(price) * Number(quantity),
          createdAt,
        },
      },
    },
  });

  return NextResponse.json({ data: insert });
}

export async function PUT(req: NextRequest) {
  const { name, price, quantity, payment_status, id, inventoryId } =
    await req.json();

  const user = await prisma.user.findUnique({
    where: { kindeId: id },
  });

  const update = await prisma.inventory.update({
    where: { userId: user?.id, id: inventoryId },
    data: {
      name,
      price: Number(price),
      quantity: Number(quantity),
      payment_status,
      total: Number(price) * Number(quantity),
    },
  });

  return NextResponse.json({ data: update });
}
