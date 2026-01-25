"use client";

import { Button } from "@/components/ui/button";
import { ModalAddReservationProps } from "./ModalAddReservation.types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Car } from "@/lib/generated/prisma/client";
import { CalendarSelector } from "./CalendarSelector";
import { useState } from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { useMediaQuery } from "@/hooks/use-media-query";
import axios from "axios";
import { toast } from "sonner";
import { Calendar } from "lucide-react";

export function ModalAddReservation(props: ModalAddReservationProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { car } = props;
  const [dateSelected, setDateSelected] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  const onReserveCar = async (car: Car, dateSelected: DateRange) => {
    const res = await axios.post("/api/checkout", {
      carId: car.id,
      priceDay: car.priceDay,
      startDate: dateSelected.from,
      endDate: dateSelected.to,
      carName: car.name,
    });

    window.location = res.data.url;
    toast.success("Car reserved successfully");
  };
  return isDesktop ? (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-linear-to-r from-green-500 to-green-600  hover:from-green-600 hover:to-green-700 rounded-full ring-offset-2 hover:ring-2 hover:ring-green-500">
          <Calendar className="w-4 h-4" />
          Add reservation
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Select Date</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <CalendarSelector
              setDateSelected={setDateSelected}
              carPriceDay={car.priceDay}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-full ring-offset-2 hover:ring-2 hover:ring-primary/20">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full ring-offset-2 hover:ring-2 hover:ring-green-500"
            onClick={() => onReserveCar(car, dateSelected)}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ) : (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full">
          <Calendar className="w-4 h-4" />
          Add reservation
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-6">
        <DrawerHeader className="text-left">
          <DrawerTitle>Select Date</DrawerTitle>
          <DrawerDescription asChild>
            <CalendarSelector
              setDateSelected={setDateSelected}
              carPriceDay={car.priceDay}
            />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex flex-col gap-2">
          <DrawerClose asChild>
            <Button variant="outline" className="rounded-full">
              Cancel
            </Button>
          </DrawerClose>
          <Button
            className="bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full"
            onClick={() => onReserveCar(car, dateSelected)}
          >
            Continue
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
