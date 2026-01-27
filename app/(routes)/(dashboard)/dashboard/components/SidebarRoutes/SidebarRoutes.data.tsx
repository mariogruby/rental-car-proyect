import {
  CarIcon,
  Calendar,
  Heart,
  ArrowLeft,
  SquareChartGantt,
} from "lucide-react";
import type { SidebarItemsProps } from "./SidebarItem/SidebarItem.types";
import { SignOutButton } from "@clerk/nextjs";


export interface SidebarSection {
  title: string;
  items: SidebarItemsProps[];
}

export const sidebarSections: SidebarSection[] = [
  {
    title: "General",
    items: [
      {
        label: "Cars",
        href: "/dashboard",
        icon: (
          <CarIcon className="h-5 w-5 ml-1 shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
      {
        label: "Cars Reserves",
        href: "/reserves",
        icon: (
          <Calendar className="h-5 w-5 ml-1 shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
      {
        label: "Loved Cars",
        href: "/loved-cars",
        icon: (
          <Heart className="h-5 w-5 ml-1 shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
    ],
  },
  {
    title: "Admin",
    items: [
      {
        label: "Manage your cars",
        href: "/dashboard/admin/cars-manager",
        icon: (
          <SquareChartGantt className="h-5 w-5 ml-1 shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
      {
        label: "All Reserves",
        href: "/dashboard/admin/reserves-admin",
        icon: (
          <Calendar className="h-5 w-5 ml-1 shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
    ],
  },
  // {
  //   title: "Account",
  //   items: [
  //     {
  //       label: "Logout",
  //       icon: (
  //         <div className="cursor-pointer">
  //         <SignOutButton redirectUrl="/">
  //           <ArrowLeft className="h-5 w-5 ml-1 shrink-0 text-neutral-700 dark:text-neutral-200" />
  //         </SignOutButton>
  //         </div>
  //       ),
  //     },
  //   ],
  // },
];
