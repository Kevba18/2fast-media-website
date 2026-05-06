import ServiceNavigation from "@/components/ServiceNavigation";
import Footer from "@/components/Footer";

export default function LeistungenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceNavigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
