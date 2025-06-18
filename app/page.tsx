import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import BenefitsSection from "./components/BenefitsSection"
import TestimonialsSection from "./components/TestimonialsSection"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
