import { Navbar } from "@/components/Shared/Navbar";
import prisma from "@/lib/db";
import { HeaderCars } from "./components/HeaderCars";
import { FiltersAndListCars } from "./components/FiltersAndListCars";
import { Separator } from "@/components/ui/separator";

export default async function pageCars() {
  const cars = await prisma.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      <Navbar />
      <div>
      <div className="p-6 lg:p-20 mx-auto">
        <HeaderCars />
        <Separator/>
        <FiltersAndListCars cars={cars}/>
      </div>
      </div>
    </div>
  );
}
