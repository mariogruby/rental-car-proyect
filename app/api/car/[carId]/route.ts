import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ carId: string }> }
) {
  try {
    const { userId } = await auth();
    const { carId } = await context.params;
    const { isPublish } = await req.json();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const car = await prisma.car.update({
      where: {
        id: carId,
        userId,
      },
      data: {
        isPublish: isPublish,
      },
    });

    return NextResponse.json({ car, success: true, status: 200 });
  } catch (error) {
    console.log(["CAR ID PATCH"], error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ carId: string }> }
) {
  try {
    const { userId } = await auth();
    const { carId } = await context.params;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const deletedCar = await prisma.car.delete({
      where: {
        id: carId,
      },
    });

    return NextResponse.json({ deletedCar, success: true, status: 200 });
  } catch (error) {
    console.log("[DELETE CAR ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
