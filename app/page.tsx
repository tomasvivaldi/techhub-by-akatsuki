import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/componentes/Header";
import Partners from "@/componentes/Partners";
import Banner from "@/componentes/Banner";
import Footer from "@/componentes/Footer";
import Hero from "@/componentes/Hero";

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
