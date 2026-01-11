import type React from "react";
import type { Car } from "@/lib/generated/prisma/client";
import type { ListCarsProps } from "./ListCars.types";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Gauge, Cog, Fuel, Check, Heart } from "lucide-react";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";

export function ListCars({ cars }: ListCarsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {cars.map((car: Car) => {
        const {
          id,
          priceDay,
          photo,
          cv,
          engine,
          people,
          name,
          type,
          transmission,
        } = car;

        return (
          <Card
            key={id}
            className="group overflow-hidden rounded-2xl bg-card border-border/40 shadow-lg shadow-black/5 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-500/50 hover:-translate-y-1"
          >
            {/* IMAGE */}
            <div className="relative aspect-[4/3] overflow-hidden bg-muted/5">
              <Image
                src={photo || "/placeholder.svg"}
                alt={name}
                fill
                priority={false}
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 duration-300" />

              <Badge className="absolute top-4 left-4 bg-green-500 text-white font-semibold px-3 py-1.5 shadow-lg shadow-green-500/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-green-500/50">
                {type}
              </Badge>

              <button
                aria-label="Add to favorites"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/90 transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-110 hover:rotate-12 active:scale-95"
              >
                <Heart size={20} className="transition-transform" />
              </button>

              <div className="absolute bottom-4 right-4 rounded-xl bg-green-500 px-4 py-2.5 shadow-md shadow-green-500/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-green-500/50">
                <span className="text-2xl font-bold text-white">
                  €{priceDay}
                </span>
                <span className="ml-1 text-sm text-white/90 font-medium">
                  /day
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-green-500 transition-colors duration-300">
                  {name}
                </h3>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <Check size={16} className="text-green-500" />
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">
                    Unlimited kilometers
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  <Spec icon={<Users size={14} />} label={people} />
                  <Spec icon={<Cog size={14} />} label={transmission} />
                  <Spec icon={<Gauge size={14} />} label={`${cv} CV`} />
                  <Spec icon={<Fuel size={14} />} label={engine} />
                </div>

                <ModalAddReservation car={car} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

/* Spec*/
function Spec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5 rounded-lg bg-muted/50 border border-border/50 px-3 py-1.5 text-xs font-medium text-foreground/80 transition-all duration-200 hover:bg-muted hover:border-border hover:text-foreground">
      <span className="flex h-3.5 w-3.5 items-center justify-center text-muted-foreground">
        {icon}
      </span>
      <span className="leading-none">{label}</span>
    </div>
  );
}
