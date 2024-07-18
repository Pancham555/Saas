import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") ?? undefined;
  const user = await prisma.user.findUnique({
    where: { kindeId: id },
  });

  return NextResponse.json({ data: user });
}

export async function POST(req: NextRequest) {
  const {
    kindeId,
    firstName,
    lastName,
    email,
  }: { kindeId: string; firstName: string; lastName: string; email: string } =
    await req.json();

  const user = await prisma.user.update({
    where: { kindeId },
    data: {
      firstName,
      lastName,
      email,
    },
  });

  return NextResponse.json({
    data: user,
  });
}
