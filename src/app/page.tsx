import  Hero from "@/app/ui/Hero";
import { BenefitsSectionComponent } from "@/components/benefits-section";
import { AppFeature } from "@/components/app-feature";
import { FooterComponent } from "@/components/footer";
import { ProblemSolutionCards } from "@/components/problem";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolutionCards />
      <BenefitsSectionComponent />
      <AppFeature />
      <FooterComponent />
    </>
  );
}
