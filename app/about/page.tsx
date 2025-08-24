import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CompanyOverview } from "@/components/company-overview"
import { VisionMission } from "@/components/vision-mission"
import { ValuesSection } from "@/components/values-section"
import { ProductionGallery } from "@/components/production-gallery"
import { CertificatesSection } from "@/components/certificates-section"
import { StatsSection } from "@/components/stats-section"
import { TimelineSection } from "@/components/timeline-section"
import { GlobalPresence } from "@/components/global-presence"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us - Corporate Excellence & Innovation",
  description:
    "Learn about our commitment to excellence, innovation, and sustainable solutions. Discover our vision, mission, values, and global presence in the industrial sector.",
  openGraph: {
    title: "About Us - Corporate Excellence & Innovation",
    description: "Learn about our commitment to excellence, innovation, and sustainable solutions.",
    images: ["/images/placeholders/og-image.png"],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CompanyOverview />
        <VisionMission />
        <ValuesSection />
        <ProductionGallery />
        <CertificatesSection />
        <StatsSection />
        <TimelineSection />
        <GlobalPresence />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
