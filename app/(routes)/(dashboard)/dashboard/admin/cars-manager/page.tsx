import { auth, currentUser } from "@clerk/nextjs/server";
import { ButtonAddCar } from "./components/ButtonAddCar";
import { ListCars } from "./components/ListCars";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { isAdmin } from "@/lib/isAdmin";

export default async function CarsManagerPage() {
  const { userId } = await auth();

  const user = await currentUser();

  if (!userId || !user || !isAdmin(userId)) return redirect("/");

  const cars = await prisma.car.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  console.log(cars)
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Manage your cars</h2>
        <ButtonAddCar />
      </div>
      <ListCars cars={cars} />
    </div>
  );
}
