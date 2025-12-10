import React from "react";
import { CTA } from "./home/components/CTA";
import { Navbar } from "./home/components/navbar";
import { Hero } from "./home/components/hero";
import { Spotlight } from "./home/components/spotlight";
import { Features } from "./home/components/features";
import { Onboarding } from "./home/components/onboarding";
import { Review } from "./home/components/reviews";
import { FAQAmrutam } from "./home/components/faq-amrutam";
import { AppInstall } from "./home/components/app-install";
import { Contact } from "./home/components/contact-us";
import { Footer } from "./home/components/footer";

export function Home() {
  return (
    <main>
      <CTA />
      <section className="flex flex-col h-dvh">
        <Navbar />
        <Hero />
      </section>
      <Spotlight />
      <Features />
      <Onboarding />
      <Review />
      <FAQAmrutam />
      <AppInstall />
      <Contact />
      <Footer />
    </main>
  );
}
