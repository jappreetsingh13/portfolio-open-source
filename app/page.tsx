import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden mx-auto lg:max-w-7xl md:max-w-5xl max-w-11/12">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
