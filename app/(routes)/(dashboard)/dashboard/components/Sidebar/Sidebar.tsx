"use client";
import React from "react";
import { SidebarBody, useSidebar } from "@/components/ui/sidebar";
import { Logo, LogoIcon } from "../LogoDashboard";
import { SidebarRoutes } from "../SidebarRoutes";
import { SidebarItem } from "../SidebarRoutes/SidebarItem";
import type { SidebarItemsProps } from "../SidebarRoutes/SidebarItem/SidebarItem.types";

export function SidebarDemo() {
  const avatarLink: SidebarItemsProps = {
    label: "Manu Arora",
    href: "#",
    icon: (
      <img
        src="https://assets.aceternity.com/manu.png"
        className="h-7 w-7 rounded-full"
        width={28}
        height={28}
        alt="Avatar"
      />
    ),
  };

  return (
    <SidebarBody className="justify-between gap-10 h-full">
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <LogoOrIcon />
        <div className="mt-8 flex flex-col gap-2">
          <SidebarRoutes />
        </div>
      </div>
      <div>
        <SidebarItem link={avatarLink} />
      </div>
    </SidebarBody>
  );
}

function LogoOrIcon() {
  const { open } = useSidebar();
  return open ? <Logo /> : <LogoIcon />;
}
