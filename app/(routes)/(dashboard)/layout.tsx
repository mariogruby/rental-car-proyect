"use client";

import { SidebarDemo } from "./dashboard/components/Sidebar";
import { NavbarDashboard } from "./dashboard/components/NavbarDashboard/NavbarDashboard";
import { Sidebar } from "@/components/ui/sidebar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Sidebar open={open} setOpen={setOpen} animate={true}>
      <div className="flex h-screen w-full overflow-hidden">
        <SidebarDemo />
        <div className="flex flex-1 flex-col overflow-hidden">
          <NavbarDashboard />
          <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-neutral-900 p-6">
            {children}
          </main>
        </div>
      </div>
    </Sidebar>
  );
}
