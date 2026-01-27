"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { data } from "./3D-Marquee.data";
import { Reveal } from "@/components/Shared/Reveal";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import { Car, Play, Sparkles, Star, Zap } from "lucide-react";

export function Marquee() {
  const images = [...data, ...data, ...data].map((i) => i.url);
  const words = ["car", "coche", "車", "汽车", "voiture", "سيارة", "carro"];

  return (
    <Reveal
      position="bottom"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* Floating badges */}
      <div className="absolute left-8 top-1/4 z-30 hidden lg:block">
        <div className="group flex items-center gap-2 rounded-full border border-green-500/30 bg-black/40 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-green-400/50 hover:bg-green-950/40">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-green-400 to-green-600 transition-transform duration-300 group-hover:scale-110">
            <Star className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-xs font-medium text-green-400">Rated #1</p>
            <p className="text-[10px] text-neutral-400">Car Rental Spain</p>
          </div>
        </div>
      </div>

      <div className="absolute right-8 top-1/3 z-30 hidden lg:block">
        <div className="group flex items-center gap-2 rounded-full border border-green-500/30 bg-black/40 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-green-400/50 hover:bg-green-950/40">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-green-400 to-green-600 transition-transform duration-300 group-hover:scale-110">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-xs font-medium text-green-400">Instant</p>
            <p className="text-[10px] text-neutral-400">Booking</p>
          </div>
        </div>
      </div>

      {/* Badge superior */}
      <div className="relative z-20 mb-6">
        <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/50 px-4 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="text-xs font-medium text-green-400">
            Premium Car Rental Experience
          </span>
          <Sparkles className="h-3 w-3 text-green-400" />
        </div>
      </div>

      {/* Main title */}
      <h2 className="relative z-20 mx-auto max-w-5xl text-center text-3xl font-bold text-white md:text-5xl lg:text-7xl">
        Find your perfect{" "}
        <span className="relative inline-block rounded-xl">
          <FlipWords words={words} className=" text-green-500" /> <br />
        </span>
        <br />
        <span className="mt-4 inline-block">in seconds</span>
      </h2>

      {/* Description */}
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-300 md:text-base lg:text-lg">
        Premium vehicles, transparent pricing and instant booking. Choose the
        car that fits your journey — from city rides to long trips.
      </p>

      {/* Stats row */}
      <div className="relative z-20 mb-8 flex flex-wrap items-center justify-center gap-8">
        {[
          { value: "500+", label: "Premium Cars" },
          { value: "10K+", label: "Happy Clients" },
          { value: "24/7", label: "Support" },
        ].map((stat, index) => (
          <div
            key={index}
            className="group flex flex-col items-center transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="text-2xl font-bold text-green-400 transition-all duration-300 group-hover:text-green-300 md:text-3xl">
              {stat.value}
            </span>
            <span className="text-xs text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link href="/cars">
          <Button className="group relative overflow-hidden rounded-full bg-linear-to-r from-green-500 to-green-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:shadow-sm hover:shadow-green-500/40">
            <span className="relative z-10 flex items-center gap-2">
              <Car className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              Browse cars
            </span>
            <span className="absolute inset-0 z-0 bg-linear-to-r from-green-600 to-green-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Button>
        </Link>

        <Button className="group rounded-full border border-green-500/30 bg-white/5 px-8 py-3 text-sm text-white backdrop-blur-sm transition-all duration-300 hover:border-green-400/50 hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/10">
          <span className="flex items-center gap-2">
            <Play className="h-4 w-4 text-green-400 transition-transform duration-300 group-hover:scale-110" />
            How it works
          </span>
        </Button>
      </div>

      {/* Gradient overlay with green tint */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/80 via-black/70 to-green-950/80" />

      {/* Decorative glow */}
      <div className="absolute left-1/2 top-1/2 z-0 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/10 blur-[120px]" />

      {/* 3D Marquee */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-linear-to-r from-transparent via-green-500/50 to-transparent" />
    </Reveal>
  );
}
