"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "@/components/Shared/Reveal";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Car, Sparkles, Star } from "lucide-react";

export function FirstBlock() {
  const words = `Don't deny yourself the pleasure of driving the best premium cars from around the world here and now`;

  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["50%", "-30%"]);
  const x = isMobile ? "0%" : xTransform;

  return (
    <div
      ref={containerRef}
      className="relative min-h-[50vh] md:min-h-[70vh] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-white via-green-500/2 to-green-100/30" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-green-300/20 rounded-full blur-3xl" />

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute top-5 right-10 md:top-20 md:right-40 z-10"
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 shadow-lg shadow-green-500/10">
          <Star className="w-4 h-4 text-green-500 fill-green-500" />
          <span className="text-sm font-medium text-green-700">Top Rated</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="hidden md:block absolute bottom-20 right-10 md:bottom-32 md:right-40 z-10"
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 shadow-lg shadow-green-500/10">
          <Sparkles className="w-4 h-4 text-green-500" />
          <span className="text-sm font-medium text-green-700">
            Premium Fleet
          </span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center min-h-[50vh] md:min-h-[70vh]">
        <Reveal className="p-6 lg:pl-40 z-10" position="bottom">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-linear-to-r from-green-500 to-green-600 rounded-full shadow-lg shadow-green-500/30"
          >
            <Car className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Since 2025</span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="bg-linear-to-r from-green-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
              Premium
            </span>
            <span className="block text-gray-900">Rental Cars</span>
            <span className="block relative">
              <span className="text-gray-900">in </span>
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  Spain
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-2 bg-linear-to-r from-green-400 to-green-500 rounded-full"
                />
              </span>
            </span>
          </h1>

          <TextGenerateEffect
            className="text-lg mt-6 lg:mt-8 lg:text-xl max-w-md text-gray-600"
            words={words}
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex gap-8 mt-8"
          >
            <div className="group">
              <p className="text-3xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">
                500+
              </p>
              <p className="text-sm text-gray-500">Premium Cars</p>
            </div>
            <div className="w-px bg-green-200" />
            <div className="group">
              <p className="text-3xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">
                10K+
              </p>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
            <div className="w-px bg-green-200" />
            <div className="group">
              <p className="text-3xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">
                15+
              </p>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
          </motion.div>
        </Reveal>

        <Reveal className="flex justify-end relative" position="right">
          {/* Glow effect behind car */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-linear-to-r from-green-400/30 to-teal-400/30 rounded-full blur-3xl" />

          <motion.div
            style={{ x }}
            className="w-full max-w-200 lg:max-w-none relative z-10"
          >
            <Image
              src="/images/peugeot-408-4d-white-2022.png"
              alt="Rental Cars"
              width={800}
              height={800}
              className="scale-x-[-1] drop-shadow-2xl hover:drop-shadow-[0_35px_35px_rgba(16,185,129,0.25)] transition-all duration-500"
              priority
            />
          </motion.div>
        </Reveal>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-green-500 to-transparent opacity-30" />
    </div>
  );
}
