import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return new Response("Unauthorized", { status: 401 });
  }

  const user = await getUser();

  const data = {
    message: "Hello User",
    authenticated: true,
    ...user,
  };

  return NextResponse.json({ data });
}
