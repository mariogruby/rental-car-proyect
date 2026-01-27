"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { dataBrands } from "./SliderBrands.data";
import { Reveal } from "@/components/Shared/Reveal";

export function SliderBrands() {
  const brands = [...dataBrands, ...dataBrands];

  return (
    <Reveal position="bottom" className="py-16 w-full overflow-hidden">
      <div className="relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-green-50 to-green-100 border border-green-200 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-green-700">
              Trusted Partners
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Premium{" "}
            <span className="bg-linear-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Brands
            </span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            We partner with the world&apos;s leading automotive brands
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Decorative Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-200 to-transparent -translate-y-1/2" />

          {/* Animated Slider */}
          <motion.div
            className="flex gap-6 md:gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {brands.map(({ url }, index) => (
              <div
                key={`${url}-${index}`}
                className="group relative flex items-center justify-center h-24 md:h-28 min-w-35 md:min-w-45"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-white rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-lg group-hover:shadow-green-100/50 group-hover:border-green-200 transition-all duration-300" />

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Brand Logo */}
                <div className="relative z-10 flex flex-col items-center gap-2 p-4">
                  <Image
                    src={`/images/brands/${url}`}
                    alt="Logo"
                    width={100}
                    height={60}
                    className="object-contain w-auto max-h-12 md:max-h-14 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Corner Accent */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <div className="flex justify-center gap-8 md:gap-16 mt-12">
          {[
            { value: "8+", label: "Premium Brands" },
            { value: "50+", label: "Car Models" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="group text-center cursor-default">
              <div className="text-2xl md:text-3xl font-bold bg-linear-to-r from-green-600 to-green-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500 group-hover:text-green-600 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
