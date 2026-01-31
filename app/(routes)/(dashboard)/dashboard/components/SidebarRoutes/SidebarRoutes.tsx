/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { SidebarItem } from "./SidebarItem";
import { sidebarSections, SidebarSection } from "./SidebarRoutes.data";
import { useSidebar } from "@/components/ui/sidebar";
import { isAdmin } from "@/lib/isAdmin";
import { useAuth } from "@clerk/nextjs";

export function SidebarRoutes({
  sections = sidebarSections,
}: {
  sections?: SidebarSection[];
}) {
  const { open } = useSidebar();
  const { userId } = useAuth();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const admin = isAdmin(userId);

  const filteredSections = sections.filter((section) => {
    if (section.title === "Admin") {
      return admin;
    }
    return true;
  });

  return (
    <>
      {filteredSections.map((section, _sectionIdx) => (
        <div key={section.title} className="flex flex-col gap-2">
          {open && (
            <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-6 mb-2 px-4">
              {section.title}
            </div>
          )}

          {section.items.map((route) => (
            <SidebarItem key={route.href} link={route} />
          ))}
        </div>
      ))}
    </>
  );
}
