import Header from "@/components/shared/Header";
import "@/app/globals.css";
import Container from "@/components/shared/Container";
import Navbar from "./components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Container>
        <section className="flex flex-col items-start md:flex-row md:gap-8 w-full">
          <Navbar />
          {children}
          <Suspense fallback={<Loading />} />
        </section>
      </Container>
    </>
  );
}
