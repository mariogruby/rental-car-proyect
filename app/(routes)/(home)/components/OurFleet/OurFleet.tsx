"use client";

import {
  categoryOurFleet,
  dataFirstBlockOurFleet,
  dataSecondBlockOurFleet,
} from "./OurFleet.data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Shared/Reveal";
import { Car, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function OurFleet() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="relative py-16 lg:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-green-50/30 to-white" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/20 rounded-full blur-3xl" />

      <Reveal
        position="right"
        className="relative max-w-6xl mx-auto text-center px-6"
      >
        {/* Header section */}
        <div className="mb-10 lg:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100/80 border border-green-200 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-green-700">
              Our Premium Fleet
            </span>
          </div>

          {/* Title with linear */}
          <h3 className="text-3xl lg:text-6xl font-bold mb-4">
            Some of our{" "}
            <span className="relative">
              <span className="bg-linear-to-r from-green-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                vehicles
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-green-500 to-teal-500 rounded-full transform origin-left animate-pulse" />
            </span>
          </h3>

          <p className="text-lg mt-4 lg:mt-6 lg:text-xl text-slate-600 w-full mx-auto max-w-2xl leading-relaxed">
            Don´t deny yourself the pleasure of driving the best premium cars
            from around the world here and now
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 items-center justify-center mb-10 lg:mb-14 max-w-3xl mx-auto">
          {categoryOurFleet.map(({ name }) => (
            <button
              key={name}
              type="button"
              onClick={() => setActiveCategory(name)}
              className={cn(
                "relative rounded-xl py-2.5 px-5 font-medium transition-all duration-300 group",
                activeCategory === name
                  ? "bg-linear-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-green-300 hover:text-green-600 hover:shadow-md hover:shadow-green-100"
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                {activeCategory === name && <Sparkles className="w-4 h-4" />}
                {name}
              </span>
              {activeCategory !== name && (
                <span className="absolute inset-0 rounded-xl bg-linear-to-r from-green-500/0 to-green-600/0 group-hover:from-green-50 group-hover:to-green-100/50 transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Images grid */}
        <div className="mb-12">
          {/* First row - 3 images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {dataFirstBlockOurFleet.map(({ url }, index) => (
              <div
                key={url}
                className="group relative overflow-hidden rounded-2xl aspect-4/3 bg-slate-100 shadow-lg hover:shadow-xl hover:shadow-green-200/50 transition-all duration-500"
              >
                {/* Overlay linear */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Image */}
                <Image
                  src={`/images/fleetImages/${url}`}
                  alt="Premium car"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Hover content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                        <Car className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">
                        View Details
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Corner badge */}
                {index === 0 && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full bg-green-500 text-white text-xs font-semibold shadow-lg">
                      Popular
                    </span>
                  </div>
                )}

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400/50 transition-colors duration-300 z-10 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Second row - 2 images centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {dataSecondBlockOurFleet.map(({ url }, index) => (
              <div
                key={url}
                className="group relative overflow-hidden rounded-2xl aspect-4/3 bg-slate-100 shadow-lg hover:shadow-xl hover:shadow-green-200/50 transition-all duration-500"
              >
                {/* Overlay linear */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Image */}
                <Image
                  src={`/images/fleetImages/${url}`}
                  alt="Premium car"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Hover content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                        <Car className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">
                        View Details
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Corner badge for new */}
                {index === 1 && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1.5 rounded-full bg-linear-to-r from-green-500 to-teal-500 text-white text-xs font-semibold shadow-lg">
                      New
                    </span>
                  </div>
                )}

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400/50 transition-colors duration-300 z-10 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/cars">
            <Button className="group relative px-8 py-4 bg-linear-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 hover:shadow-sm hover:shadow-green-500/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Car className="w-5 h-5" />
                View All Vehicles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-linear-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>

          <div className="flex items-center gap-3 text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-linear-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center"
                >
                  <span className="text-xs text-white font-bold">{i}</span>
                </div>
              ))}
            </div>
            <span className="text-sm">
              <span className="font-semibold text-green-600">500+</span>{" "}
              vehicles available
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
