import { Reveal } from "@/components/Shared/Reveal";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";
import Image from "next/image";
import Link from "next/link";

export function DriveToday() {
  return (
    <div className="relative mx-auto lg:my-32 max-w-5xl">
      {/* CARD */}
      <Reveal
        position="bottom"
        className="relative z-10 p-8 rounded-md bg-black/96 antialiased bg-grid-white/[0.02] overflow-hidden"
      >
        <Spotlight />

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* TEXT */}
          <div className="mx-auto text-center lg:mx-0 lg:text-left max-w-md">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400">
              Drive <br /> your dream car today
            </h1>

            <p className="mt-4 text-neutral-300">
              Register and explore the world of premium cars
            </p>

            <div className="pt-6">
              <Link href="/sign-in">
                <Button className="rounded-full bg-linear-to-r from-green-500 to-green-600 
                hover:from-green-600 hover:to-green-700 px-8 py-3 text-sm font-semibold text-white">
                  Register here
                </Button>
              </Link>
            </div>
          </div>

          {/* EMPTY COLUMN (AIR FOR CAR) */}
          <div className="hidden lg:block" />
        </div>
      </Reveal>

      {/* CAR IMAGE */}
      <Reveal
        position="right"
        className="hidden lg:block absolute -right-48 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
      >
        <Image
          src="/images/audi-q2-suv-silver-2021.png"
          alt="Car"
          width={650}
          height={350}
          className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)]"
        />
      </Reveal>
    </div>
  );
}
