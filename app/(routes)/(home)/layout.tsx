// home layout
import { Footer } from "@/components/Shared/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <main className="flex-1 pt-2">{children}</main>
      <Footer />
    </div>
  );
}
