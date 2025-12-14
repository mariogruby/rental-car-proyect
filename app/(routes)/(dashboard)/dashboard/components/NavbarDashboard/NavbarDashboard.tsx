"use client";

import { UserButton } from "@clerk/nextjs";
import { IconMenu2 } from "@tabler/icons-react";
import { useSidebar } from "@/components/ui/sidebar";

export function NavbarDashboard() {
  const { open, setOpen } = useSidebar();

  return (
    <nav className="flex items-center justify-between w-full h-15 px-2 border-b gap-x-4 md:px-6 bg-background">
      {/* LEFT */}
      <div className="flex items-center gap-x-2">
        {/* Botón mobile */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <IconMenu2 className="w-6 h-6" />
        </button>

        <p className="text-lg font-semibold">NavbarDashboard...</p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-end gap-x-2">
        <UserButton />
      </div>
    </nav>
  );
}
