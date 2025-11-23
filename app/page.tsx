import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Approach from "@/components/Approach";
import HowItWorks from "@/components/HowItWorks";
import TeamModel from "@/components/TeamModel";
import WhyItWorks from "@/components/WhyItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Approach />
      <HowItWorks />
      <TeamModel />
      <WhyItWorks />
      <Contact />
      <Footer />
    </main>
  );
}
