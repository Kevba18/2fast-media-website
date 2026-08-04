import Navigation from "@/components/Navigation";
import HomeExperience from "@/components/HomeExperience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HomeExperience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
