import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ClientMarquee />
        <ProblemSolution />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
