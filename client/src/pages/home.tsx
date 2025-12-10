import { Navigation } from "@/components/ui/navigation";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { RoiSection } from "@/components/sections/roisection";
// import { ClientsSection } from "@/components/sections/clients";
import { PackagesSection } from "@/components/sections/packages";
import { PortfolioSection } from "@/components/sections/portfolio";
import { CreatorPlansSection } from "@/components/sections/creator-plans";
import { ContactForm } from "@/components/contact-form";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <RoiSection />
              {/* <ClientsSection /> */}
        <PackagesSection />
        <PortfolioSection />
        <CreatorPlansSection />
        <ContactForm />
      </main>
      <FooterSection />
      <ScrollToTop />
    </div>
  );
}
