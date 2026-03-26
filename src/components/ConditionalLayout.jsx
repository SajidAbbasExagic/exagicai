"use client";

import { usePathname } from "next/navigation";
import Header from "../app/_components/Header/Header";
import Footer from "../app/_components/Footer/Footer";
import FloatingChat from "./FloatingChat";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAuditPage = pathname === "/audit";
  const isLandingPage = pathname === "/ai-website-sprint";
  const hideLayout = isAuditPage || isLandingPage;

  return (
    <>
      {!hideLayout && <Header />}
      <main className="flex-grow">{children}</main>
      {!hideLayout && <Footer />}
      <FloatingChat />
    </>
  );
}
