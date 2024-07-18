import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId") ?? undefined;
  const user = await prisma.user.findUnique({
    where: { kindeId: userId },
  });
  const data = await prisma.user.findUnique({
    // @ts-ignore
    where: { id: user?.id },
    include: { orders: true },
  });

  const sales = await prisma.order.aggregate({
    where: { userId: user?.id },
    _sum: {
      total: true,
    },
  });

  const creditSales = await prisma.order.aggregate({
    where: { userId: user?.id, payment_status: "unpaid" },
    _sum: {
      total: true,
    },
  });

  const cashSales = await prisma.order.aggregate({
    where: { userId: user?.id, payment_status: "paid" },
    _sum: {
      total: true,
    },
  });

  const inventory = await prisma.inventory.aggregate({
    where: { userId: user?.id },
    _sum: {
      total: true,
    },
    _count: {
      _all: true,
    },
  });

  const stock = await prisma.stock.aggregate({
    where: { userId: user?.id },
    _sum: {
      total: true,
    },
    _count: {
      _all: true,
    },
  });

  return NextResponse.json({
    data: data?.orders,
    inventory,
    stock,
    sales: sales._sum.total,
    credit_sales: creditSales._sum.total,
    cash_sales: cashSales._sum.total,
  });
}
