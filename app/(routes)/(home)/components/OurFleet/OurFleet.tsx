import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import {
  categoryOurFleet,
  dataFirstBlockOurFleet,
  dataSecondBlockOurFleet,
} from "./OurFleet.data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Reveal } from "@/components/Shared/Reveal";

export function OurFleet() {
  return (
    <Reveal
      position="right"
      className="max-w-6xl mx-auto text-center py-12 lg:py-40 p-6"
    >
      <h3 className="text-2xl lg:text-6xl font-bold">Some of our vehicles</h3>
      <p className="text-lg mt-2 lg:mt-5 lg:text-xl text-center w-full mx-auto max-w-2xl mb-5 lg:mb-10">
        Don´t deny yourself pleasure of driving the best premium cars form
        around the world here and now the world
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 items-center justify-center mb-5 max-w-2xl mx-auto">
        {categoryOurFleet.map(({ name, active }) => (
          <div
            key={name}
            className={cn(
              "rounded-xl py-2 px-3",
              active ? "bg-green-500 text-white" : "bg-slate-100"
            )}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="mb-10">
        <div className="grid grid-cols-3 gap-x-6 mb-6">
          {dataFirstBlockOurFleet.map(({ url }) => (
            <div
              key={url}
              className="relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <Image
                src={`/images/fleetImages/${url}`}
                alt="Premium car"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-x-6 max-w-5xl mx-auto">
          {dataSecondBlockOurFleet.map(({ url }) => (
            <div
              key={url}
              className="relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <Image
                src={`/images/fleetImages/${url}`}
                alt="Premium car"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
