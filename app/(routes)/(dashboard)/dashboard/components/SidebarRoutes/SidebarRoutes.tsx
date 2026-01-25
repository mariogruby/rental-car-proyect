"use client";
import React from "react";
import { SidebarItem } from "./SidebarItem";
import { sidebarSections, SidebarSection } from "./SidebarRoutes.data";
import { useSidebar } from "@/components/ui/sidebar";

export function SidebarRoutes({
  sections = sidebarSections,
}: {
  sections?: SidebarSection[];
}) {
  const { open } = useSidebar();

  return (
    <>
      {sections.map((section, sectionIdx) => (
        <div key={sectionIdx} className="flex flex-col gap-2">
          {open && (
            <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-6 mb-2 px-4">
              {section.title}
            </div>
          )}

          {section.items.map((route, itemIdx) => (
            <SidebarItem key={`${sectionIdx}-${itemIdx}`} link={route} />
          ))}
        </div>
      ))}
    </>
  );
}
