"use client";
import React from "react";
import { SidebarLink } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import type { SidebarItemsProps } from "./SidebarItem.types";
import { cn } from "@/lib/utils";

interface Props {
  link: SidebarItemsProps;
}

export function SidebarItem({ link }: Props) {
  const pathname = usePathname() || "/";
  const activePath = pathname === link.href;

  return (
    <SidebarLink
      link={link}
      className={cn(
        `items-center  rounded-lg`,
        activePath && "bg-green-500/10 "
      )}
    />
  );
}
