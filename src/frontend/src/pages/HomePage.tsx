import { useEffect } from "react";
import BuiltBeyondSection from "../components/BuiltBeyondSection";
import CountdownSection from "../components/CountdownSection";
import CtaSection from "../components/CtaSection";
import HeroStackedCards from "../components/HeroStackedCards";
import PhysicalRealisationSection from "../components/PhysicalRealisationSection";
import ServicesSection from "../components/ServicesSection";
import StudioStorySection from "../components/StudioStorySection";
import WorkSection from "../components/WorkSection";

export default function HomePage() {
  useEffect(() => {
    document.title = "Studio34 | Automotive Design & Product Development Studio";

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Studio34 is an India-based automotive design and product development studio working across vehicle design, prototyping, CMF, surface development and brand-defining mobility experiences.",
      );
  }, []);

  return (
    <main>
      <HeroStackedCards />
      <CountdownSection />
      <BuiltBeyondSection />
      <ServicesSection />
      <PhysicalRealisationSection />
      <StudioStorySection />
      <WorkSection />
      <CtaSection />
    </main>
  );
}

