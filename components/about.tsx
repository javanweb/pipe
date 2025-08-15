import Image from "next/image"
import { Check } from "lucide-react"
import { Section } from "@/components/section"

export function About() {
  const benefits = [
    "Premium quality materials and manufacturing",
    "Comprehensive product range for all applications",
    "Technical support and installation guidance",
    "Proven reliability in demanding environments",
    "Competitive pricing and fast delivery",
  ]

  return (
    <Section className="bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src="/modern-manufacturing-facility.png"
            alt="Manufacturing facility"
            width={600}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
            Leading Industrial Solutions Provider
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            With over two decades of experience in the industry, we specialize in manufacturing and distributing
            high-quality plastic piping systems, valves, and fittings for residential, commercial, and industrial
            applications.
          </p>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
