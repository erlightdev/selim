import type { ReactNode } from "react";

import Footer from "@/layouts/footer";
import Navbar from "@/layouts/navbar";

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Navbar />
      <main className="mx-auto w-full flex-1 px-1.5 py-10 sm:px-4 lg:px-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
