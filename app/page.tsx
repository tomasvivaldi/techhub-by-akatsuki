import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/app/componentes/Header";
import Partners from "@/app/componentes/Partners";
import Banner from "@/app/componentes/Banner";
import Footer from "@/app/componentes/Footer";
import Hero from "@/app/componentes/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Partners />
      <Banner />
      <Footer />
    </main>
  );
}
