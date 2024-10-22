import  Hero from "@/app/ui/Hero";
import { BenefitsSectionComponent } from "@/components/benefits-section";
import { AppFeature } from "@/components/app-feature";
import { FooterComponent } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsSectionComponent />
      <AppFeature />
      <FooterComponent />

    </>
  );
}
