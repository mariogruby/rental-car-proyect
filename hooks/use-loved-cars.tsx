import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import { Car } from "@/lib/generated/prisma/client";

interface UseLovedCarsType {
  lovedItems: Car[];
  addLovedItem: (data: Car) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedCars = create(
  persist<UseLovedCarsType>(
    (set, get) => ({
      lovedItems: [],
      addLovedItem: (data: Car) => {
        set({
          lovedItems: [...get().lovedItems, data],
        });
        toast.success("Car added to loved cars");
      },
      removeLovedItem: (id: string) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id != id)],
        });
        toast.info("Car removed from loved cars list");
      },
    }),
    {
      name: "loved-cars-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
