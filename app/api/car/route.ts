import prisma from "@/lib/db"
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const data = await req.json();

    if (!userId) return new NextResponse("unauthorized", { status: 401 });

    const car = await prisma.car.create({
      data: {
        userId,
        ...data,
      },
    });

    return NextResponse.json({car, success: true, status: 200 });
  } catch (error) {
    console.log("[car]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
