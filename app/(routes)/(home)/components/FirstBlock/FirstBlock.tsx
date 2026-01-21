"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "@/components/Shared/Reveal";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function FirstBlock() {
  const words = `Don´t deny yourself pleasure of driving the best premium cars from around the world here and now`;

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-30%"]);

  return (
    <div
      ref={containerRef}
      className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center relative min-h-[40vh] md:min-h-[60vh] overflow-x-hidden"
    >
      <Reveal className="p-6 lg:pl-40" position="bottom">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
          Premium
          <span className="block">Rental Cars</span>
          in Spain
        </h1>
        <TextGenerateEffect
          className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm"
          words={words}
        />
      </Reveal>

      <Reveal className="flex justify-end relative" position="right">
        <motion.div
          style={{ x }}
          className="w-full max-w-[800px] lg:max-w-none"
        >
          <Image
            src="/images/peugeot-408-4d-white-2022.png"
            alt="Rental Cars"
            width={800}
            height={800}
            className="scale-x-[-1] drop-shadow-2xl"
            priority
          />
        </motion.div>
      </Reveal>
    </div>
  );
}
