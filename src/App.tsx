import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { PainSection, ToolSection, WorkflowSection } from "./components/Story";
import PromptDemo from "./components/PromptDemo";
import PlrSection from "./components/PlrSection";
import OfferSection, { ComparisonSection } from "./components/Offer";
import { AudienceSection, DeliverySection, FaqSection } from "./components/AudienceFaq";
import { FinalCTA, Footer } from "./components/FinalFooter";
import StickyCTA from "./components/StickyCTA";

export default function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;

    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grain-page min-h-screen overflow-x-clip bg-cream">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-cream"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <PainSection />
        <ToolSection />
        <WorkflowSection />
        <PromptDemo />
        <PlrSection />
        <ComparisonSection />
        <OfferSection />
        <AudienceSection />
        <DeliverySection />
        <FaqSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
