"use client";

import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function orderConfirmationPage() {
  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">Thank you for your order</h1>
          <p>
            in a few minutes you will receive an email with the confirmation of
            your order
          </p>
          <p>You are visualizing the order confirmation in your client area</p>
          <Link href="/">
            <Button>Back to the homePage</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
