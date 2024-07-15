import { PrismaClient } from "@prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user == null || !user.id) {
    return NextResponse.json({ message: "Not valid data found" });
    // throw new Error("something went wrong with authentication" + user);
  }

  let dbUser = await prisma.user.findUnique({
    where: { kindeId: user?.id },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        kindeId: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "", // Using nullish coalescing operator to provide a default empty string value
      },
    });
  }
  prisma.$disconnect();
  return NextResponse.redirect("http://localhost:3000/dashboard");
}
