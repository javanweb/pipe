import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import StrengthsSection from '@/components/StrengthsSection';
import { Industries } from "@/components/industries"
import { LogosStrip } from "@/components/logos-strip"
import { Stats } from "@/components/stats"
import { ContactForm } from "@/components/contact-form"
import PartnerSection from '@/components/PartnerSection';
import { Footer } from "@/components/footer"
// import { Section } from "@/components/section"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Products />
      <StrengthsSection />
      <Industries />
      <PartnerSection />
      <Footer />
    </main>
  )
}
