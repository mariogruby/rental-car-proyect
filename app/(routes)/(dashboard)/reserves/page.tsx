import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { TableReserves } from "./components/TableReserves";

export default async function pageReserves() {
  const { userId } = await auth();

  if (!userId) return redirect("/");

  const orders = await prisma.order.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <h1 className="mb-4 text-3xl">Reserve page </h1>
      {orders.length === 0 ? (
        <div className="flex flex-col justify-center gap-4 items-center">
          <h2 className="text-xl">Not orders here</h2>
          <p>place your orders through the order page</p>
          <Link href="/cars">
            <Button>List cars</Button>
          </Link>
        </div>
      ) : (
        <TableReserves orders={orders} />
      )}
    </div>
  );
}
