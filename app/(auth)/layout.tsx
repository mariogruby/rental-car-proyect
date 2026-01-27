"use client";

import React from "react";

import Image from "next/image";
import { Car, Shield, Clock, Star } from "lucide-react";

const features = [
  { icon: Shield, text: "Secure & Trusted" },
  { icon: Clock, text: "24/7 Support" },
  { icon: Star, text: "Premium Fleet" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left side - Form */}
      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="md:w-full md:max-w-md">{children}</div>
      </div>

      {/* Right side - Branding */}
      <div className="relative hidden overflow-hidden lg:block">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-emerald-400 via-green-500 to-green-600" />

        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white" />
          <div className="absolute -bottom-32 -left-32 h-125 w-125 rounded-full bg-white" />
          <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        </div>

        {/* Animated car silhouettes */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-8 opacity-10">
          <Car className="h-32 w-32 text-white" />
          <Car className="h-24 w-24 text-white translate-y-4" />
          <Car className="h-28 w-28 text-white -translate-y-2" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-12">
          {/* Logo container with glow effect */}
          <div className="group relative mb-8">
            <div className="absolute -inset-4 rounded-full bg-white/20 blur-xl transition-all duration-500 group-hover:bg-white/30" />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-2xl shadow-emerald-900/30 transition-all duration-300 hover:scale-105 hover:shadow-emerald-900/40">
              <Image
                src="/logo-primary.svg"
                alt="Logo Rental cars"
                width={64}
                height={64}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Title with text shadow */}
          <h1 className="mb-3 text-4xl font-bold text-white drop-shadow-lg">
            Rental Car
          </h1>
          <p className="mb-12 max-w-xs text-center text-lg text-emerald-50/90">
            The best option to rent vehicles
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/25 hover:scale-105"
              >
                <feature.icon className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-medium text-white">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom decorative line */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 rounded-full bg-white/30" />
              <div className="h-1.5 w-24 rounded-full bg-white/50" />
              <div className="h-1 w-12 rounded-full bg-white/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
