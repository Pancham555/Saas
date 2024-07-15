import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const {
    id,
    firstName,
    lastName,
    email,
  }: { id: string; firstName: string; lastName: string; email: string } =
    await req.json();

  const user = await prisma.user.update({
    where: { kindeId: id },
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
