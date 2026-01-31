"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Car } from "lucide-react";

export function SkeletonCars() {
  const numberItems = 12;

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
      {[...Array(numberItems)].map((_, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-2xl border border-green-100 p-4 
                     shadow-md shadow-green-100/50 overflow-hidden"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Decorative linear background */}
          <div className="absolute inset-0 bg-linear-to-br from-green-50/50 via-transparent to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Shimmer effect overlay */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-green-100/40 to-transparent" />

          {/* Image skeleton with car icon */}
          <div className="relative">
            <Skeleton className="h-48 w-full rounded-xl bg-linear-to-br from-green-100 to-green-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 rounded-full bg-white/80 shadow-lg shadow-green-200/50">
                <Car className="w-8 h-8 text-green-300 animate-pulse" />
              </div>
            </div>
            {/* Badge skeleton */}
            <Skeleton className="absolute top-3 right-3 h-6 w-16 rounded-full bg-green-200/60" />
          </div>

          {/* Content skeletons */}
          <div className="mt-4 space-y-3 relative">
            {/* Title skeleton */}
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-32 rounded-lg bg-linear-to-r from-green-100 to-green-50" />
              <Skeleton className="h-5 w-5 rounded-full bg-green-100" />
            </div>

            {/* Specs row skeleton */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-7 w-20 rounded-lg bg-green-50 border border-green-100" />
              <Skeleton className="h-7 w-20 rounded-lg bg-green-50 border border-green-100" />
              <Skeleton className="h-7 w-16 rounded-lg bg-green-50 border border-green-100" />
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-linear-to-r from-transparent via-green-200 to-transparent" />

            {/* Price and button row */}
            <div className="flex items-center justify-between pt-1">
              <div className="space-y-1">
                <Skeleton className="h-3 w-12 rounded bg-green-100/50" />
                <Skeleton className="h-6 w-20 rounded-lg bg-linear-to-r from-green-200 to-green-100" />
              </div>
              <Skeleton className="h-10 w-24 rounded-xl bg-linear-to-r from-green-400 to-green-300" />
            </div>
          </div>

          {/* Bottom decorative line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-1/2 bg-linear-to-r from-transparent via-green-400 to-transparent transition-all duration-500 rounded-full" />
        </div>
      ))}
    </div>
  );
}
