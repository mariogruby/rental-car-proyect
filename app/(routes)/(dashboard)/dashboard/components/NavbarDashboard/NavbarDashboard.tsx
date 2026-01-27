"use client";

import dynamic from "next/dynamic";
import { IconMenu2 } from "@tabler/icons-react";
import { useSidebar } from "@/components/ui/sidebar";

const UserButton = dynamic(
  () => import("@clerk/nextjs").then(m => m.UserButton),
  { ssr: false }
);

export function NavbarDashboard() {
  const { open, setOpen } = useSidebar();

  return (
    <nav className="flex items-center justify-between w-full h-15 px-2 border-b gap-x-4 md:px-6 bg-neutral-100">
      {/* LEFT */}
      <div className="flex items-center gap-x-2">
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <IconMenu2 className="w-6 h-6" />
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-end gap-x-2">
        <UserButton />
      </div>
    </nav>
  );
}
