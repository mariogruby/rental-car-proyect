import {
  CarIcon,
  Calendar,
  Heart,
  ArrowLeft,
  Settings,
  Users,
  SquareChartGantt,
} from "lucide-react";
import type { SidebarItemsProps } from "./SidebarItem/SidebarItem.types";

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
        href: "/admin/settings",
        icon: (
          <Calendar className="h-5 w-5 ml-1 shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        label: "Logout",
        href: "/login",
        icon: (
          <ArrowLeft className="h-5 w-5 ml-1 shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
    ],
  },
];
