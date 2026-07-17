import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Experience from "@/src/components/Experience";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import AnimatedBackground from "@/src/components/AnimatedBackground";
import ScrollProgress from "@/src/components/ScrollProgress";
import BackToTop from "@/src/components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}