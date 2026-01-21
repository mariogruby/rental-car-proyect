"use client";

import { Reveal } from "@/components/Shared/Reveal";
import { dataFeatures } from "./Features.data";

export default function Features() {
  return (
    <div className="max-w-6xl mx-auto p-6 lg:py-40">
      {/* Header Section */}
      <div className="mb-12 lg:mb-16">
        <Reveal position="right" delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-emerald-600">
              Why Choose Us
            </span>
          </div>
        </Reveal>

        <Reveal position="right" delay={0.1}>
          <h3 className="text-3xl lg:text-6xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent">
            Key Features
          </h3>
        </Reveal>

        <Reveal position="right" delay={0.2}>
          <p className="max-w-lg mt-5 lg:mt-10 text-lg text-zinc-600 leading-relaxed">
            We are all about our client&apos;s comfort and safety. That&apos;s
            why we provide the best service you can imagine.
          </p>
        </Reveal>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {dataFeatures.map(({ icon: Icon, text, delay }) => (
          <Reveal key={text} position="bottom" delay={delay}>
            <div
              className="group relative p-6 lg:p-8 rounded-2xl bg-white border border-zinc-100 
                         hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10 
                         transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="relative flex flex-col items-center text-center">
                {/* Icon container */}
                <div
                  className="relative mb-5 p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 
                              border border-emerald-500/10 group-hover:border-emerald-500/30 
                              group-hover:shadow-md group-hover:shadow-emerald-500/10 
                              transition-all duration-300"
                >
                  <Icon
                    className="w-7 h-7 lg:w-8 lg:h-8 text-emerald-600 group-hover:text-emerald-500 
                               group-hover:scale-110 transition-all duration-300"
                    strokeWidth={1.5}
                  />

                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-xl bg-emerald-500/20 blur-xl 
                                opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  />
                </div>

                {/* Text */}
                <p
                  className="font-semibold text-base lg:text-lg text-zinc-800 
                             group-hover:text-emerald-700 transition-colors duration-300"
                >
                  {text}
                </p>

                {/* Decorative line */}
                <div
                  className="mt-4 w-8 h-0.5 rounded-full bg-emerald-500/30 
                              group-hover:w-12 group-hover:bg-emerald-500 
                              transition-all duration-300"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Bottom decorative element */}
      <Reveal position="bottom" delay={0.5}>
        <div className="flex justify-center mt-12 lg:mt-16">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
                        bg-gradient-to-r from-emerald-50 to-white border border-emerald-100 
                        shadow-sm hover:shadow-md hover:shadow-emerald-500/10 
                        transition-all duration-300"
          >
            <div className="flex -space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-emerald-500"
                  style={{ opacity: 1 - i * 0.25 }}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-zinc-600">
              Trusted by 10,000+ customers
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
