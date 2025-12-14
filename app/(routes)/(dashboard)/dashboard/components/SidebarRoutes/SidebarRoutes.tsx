"use client";
import React from "react";
import { SidebarItem } from "./SidebarItem";
import { sidebarSections, SidebarSection } from "./SidebarRoutes.data";
import { useSidebar } from "@/components/ui/sidebar"; // ← IMPORTANTE: agregar este import

// Ya no necesitas el prop open
export function SidebarRoutes({
  sections = sidebarSections,
}: {
  sections?: SidebarSection[];
}) {
  const { open } = useSidebar(); // ← Obtenemos el estado open del contexto

  return (
    <>
      {sections.map((section, sectionIdx) => (
        <div key={sectionIdx} className="flex flex-col gap-2">
          {/* Título de sección: solo visible cuando el sidebar está abierto */}
          {open && (
            <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-6 mb-2 px-4">
              {section.title}
            </div>
          )}

          {/* Items de la sección */}
          {section.items.map((route, itemIdx) => (
            <SidebarItem key={`${sectionIdx}-${itemIdx}`} link={route} />
          ))}
        </div>
      ))}
    </>
  );
}
