import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function orderErrorPage() {
  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">There was an error with your order</h1>
          <Link href="/">
            <Button className="bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full">
              Back to the Home page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
