"use client";

import {
  Navbar as AceternityNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavItem,
} from "@/components/ui/resizable-navbar";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Heart, User, Car, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLovedCars } from "@/hooks/use-loved-cars";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lovedItems } = useLovedCars();

  const navItems: NavItem[] = [
    {
      name: "Cars",
      link: "/cars",
      icon: Car,
    },
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: LayoutDashboard,
    },
  ];

  return (
    <AceternityNavbar>
      <NavBody>
        {/* Logo */}
        {/* the logo-primary.svg is hardcoded around the component resizable-navbar.tsx      */}
        <NavbarLogo
          href="/"
          label="Rental Cars"
          imageSrc="/logo-primary.svg"
          imageAlt="Rental Cars logo"
          imageSize={40}
          className="gap-3"
        />

        {/* Links */}
        <NavItems items={navItems} />

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <SignedIn>
            <NavbarButton href="/loved-cars" variant="secondary">
              <Heart
                strokeWidth={1}
                className={`cursor-pointer ${
                  lovedItems.length > 0
                    ? "fill-green-500 text-green-500"
                    : "transition hover:text-green-500"
                } `}
              />
            </NavbarButton>
            <div className="pt-2">
              <UserButton />
            </div>
          </SignedIn>

          <SignedOut>
            <NavbarButton
              href="/sign-in"
              variant="primary"
              className="rounded-full flex gap-x-2"
            >
              <User className="h-4 w-4" />
              Sign in
            </NavbarButton>
          </SignedOut>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-primary.svg"
              alt="Rental Cars"
              width={32}
              height={32}
            />
            <span className="font-semibold">Rental Cars</span>
          </Link>

          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-neutral-700 dark:text-neutral-300 hover:text-green-500"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex flex-col gap-5">
            <SignedIn>
              <>
                <Link
                  href="/loved-cars"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-neutral-700 hover:text-green-500"
                >
                  <Heart size={18} />
                  Loved cars
                </Link>
                <UserButton />
              </>
            </SignedIn>

            <SignedOut>
              <NavbarButton href="/sign-in" className="w-full flex gap-x-2">
                <User className="h-4 w-4" />
                Sign in
              </NavbarButton>
            </SignedOut>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </AceternityNavbar>
  );
}
