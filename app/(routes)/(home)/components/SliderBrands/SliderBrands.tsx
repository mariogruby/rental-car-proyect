"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { dataBrands } from "./SliderBrands.data";
import { Reveal } from "@/components/Shared/Reveal";

export function SliderBrands() {
  const brands = [...dataBrands, ...dataBrands];

  return (
    <Reveal position="bottom" className="mt-5 mb-10 w-full overflow-hidden">
      <div className="mb-15 relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {brands.map(({ url }, index) => (
            <div
              key={`${url}-${index}`}
              className="flex items-center justify-center h-20 md:h-22.5 lg:h-25 min-w-37.5"
            >
              <Image
                src={`/images/brands/${url}`}
                alt="Brand logo"
                width={120}
                height={80}
                className="object-contain w-auto max-h-full brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </Reveal>
  );
}
