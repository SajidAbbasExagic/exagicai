"use client";

import { usePathname } from "next/navigation";
import Header from "../app/_components/Header/Header";
import Footer from "../app/_components/Footer/Footer";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAuditPage = pathname === "/audit";

  return (
    <>
      {!isAuditPage && <Header />}
      <main className="flex-grow">{children}</main>
      {!isAuditPage && <Footer />}
    </>
  );
}
