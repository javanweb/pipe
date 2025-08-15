import Image from "next/image"
import { Section } from "@/components/section"

export function LogosStrip() {
  const partners = [
    { name: "Partner 1", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Partner 2", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Partner 3", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Partner 4", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Partner 5", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Partner 6", logo: "/placeholder.svg?height=80&width=120" },
  ]

  return (
    <Section title="Certifications & Partners">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
          >
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={120}
              height={80}
              className="max-h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
