// components/Footer.tsx
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Car, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24">
      <Card className="rounded-none border-x-0 border-b-0">
        <CardContent className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Car className="h-5 w-5 text-green-500" />
                RentalCar
              </div>
              <p className="text-sm text-muted-foreground">
                Rent modern, safe cars at the best price. Drive without
                concerns.
              </p>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-foreground transition"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fleet"
                    className="hover:text-foreground transition"
                  >
                    Fleet
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-foreground transition"
                  >
                    Prices
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-foreground transition"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-foreground transition"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-foreground transition"
                  >
                    terms and conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Contact</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-500" />
                  Madrid, Spain
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-500" />
                  +34 600 123 456
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-green-500" />
                  support@rentalcar.com
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <span>
              © {new Date().getFullYear()} RentalCar. All rights reserved.
            </span>
            <span>Designed and developed by <Link href="https://github.com/mariogruby">https://github.com/mariogruby</Link></span>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
