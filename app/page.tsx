import { Banner } from "@/app/components/banner";
import { CTA } from "@/app/components/cta";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { Hero } from "@/app/components/hero";
import { Steps } from "@/app/components/steps";
import { Testimonies } from "@/app/components/testimonies";

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <Steps />
      <CTA />
      <Testimonies />
      <Footer />
    </>
  );
}
