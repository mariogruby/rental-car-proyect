"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { data } from "./3D-Marquee.data";
import { Reveal } from "@/components/Shared/Reveal";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";

export function Marquee() {
  const images = [...data, ...data, ...data].map((i) => i.url);
  const words = ["car", "coche", "車", "汽车", "voiture", "سيارة", "carro"];

  return (
    <Reveal
      position="bottom"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="relative z-20 mx-auto max-w-5xl text-center text-3xl font-bold text-white md:text-5xl lg:text-7xl">
        Find your perfect{" "}
        <span className="relative inline-block rounded-xl">
          <FlipWords words={words} className=" text-green-500" /> <br />
        </span>
        <br />
        in seconds
      </h2>

      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-300 md:text-base lg:text-lg">
        Premium vehicles, transparent pricing and instant booking. Choose the
        car that fits your journey — from city rides to long trips.
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <Button className="rounded-full bg-linear-to-r from-green-500 to-green-600 
                hover:from-green-600 hover:to-green-700 px-8 py-3 text-sm font-semibold text-white transition">
          Browse cars
        </Button>

        <Button className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-green-500/20">
          How it works
        </Button>
      </div>

      <div className="absolute inset-0 z-10 bg-black/70" />

      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </Reveal>
  );
}
