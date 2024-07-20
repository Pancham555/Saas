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
  const data = await prisma.order.findMany({
    where: { userId: id?.id },
    include: { items: true },
    skip,
    take,
  });
  const count = await prisma.order.count({
    where: {
      userId: id?.id,
    },
  });
  const total = await prisma.order.aggregate({
    where: {
      userId: id?.id,
    },
    _sum: {
      total: true,
    },
  });

  const stock = await prisma.stock.findMany({
    where: { userId: id?.id },
  });

  return NextResponse.json({
    data: { data, count, total: total._sum.total, stock },
  });
}

export async function POST(req: NextRequest) {
  const { id, name, email, payment_status, createdAt, order_items } =
    await req.json();
  // const arrayOfItems = JSON.parse(order_items);
  const arrOfItems = order_items.map(
    // @ts-ignore
    ({ id, public_id, payment_status, userId, ...rest }) => rest
  );

  // @ts-ignore
  const total = arrOfItems.reduce((accumulator, currentObject) => {
    return accumulator + currentObject.total;
  }, 0);

  const createOrder = await prisma.user.update({
    where: { kindeId: id },
    data: {
      orders: {
        create: {
          name,
          email,
          createdAt,
          payment_status,
          total,
          items: {
            createMany: {
              data: [...arrOfItems],
            },
          },
        },
      },
    },
  });

  return NextResponse.json({ data: createOrder });
}

export async function PUT(req: NextRequest) {
  const { name, email, payment_status, id, createdAt, orderId, order_items } =
    await req.json();

  const arrOfItems = order_items.map(
    // @ts-ignore
    ({ id, public_id, payment_status, userId, orderId, ...rest }) => rest
  );
  // @ts-ignore
  const total = arrOfItems.reduce((accumulator, currentObject) => {
    return accumulator + currentObject.total;
  }, 0);

  const user = await prisma.user.findUnique({
    where: { kindeId: id },
  });

  const update = await prisma.order.update({
    where: {
      id: orderId,
      userId: user?.id,
    },
    data: {
      name,
      email,
      payment_status,
      total,
      createdAt,
      items: {
        deleteMany: {
          orderId,
        },
        createMany: {
          data: [...arrOfItems],
        },
      },
    },
  });

  return NextResponse.json({ data: update });
}
