import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/industrial-pipes-factory.png"
          alt="Industrial pipes and fittings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">IndustryPlast —</h1>
          <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
            Perfectly designed and proven products for water supply and heating systems. We provide solutions for your
            business, budget and the safety of your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
<Button 
  size="lg"
  style={{ backgroundColor: '#25408f' }}
  className="hover:bg-[#1e357b] hover:opacity-90 text-white transition duration-200"
>
  Download Catalog
</Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              View Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
