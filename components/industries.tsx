import Image from "next/image"
import { Section } from "@/components/section"

export function Industries() {
  const industries = [
    {
      title: "Residential Buildings",
      image: "/modern-residential-plumbing.png",
    },
    {
      title: "Commercial Facilities",
      image: "/commercial-hvac.png",
    },
    {
      title: "Industrial Plants",
      image: "/industrial-piping.png",
    },
    {
      title: "Healthcare Facilities",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Educational Institutions",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Hospitality Sector",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <Section
      title="Industries & Applications"
      description="Serving diverse sectors with tailored piping solutions"
      className="bg-gray-50"
    >
      <div className="overflow-x-auto">
        <div className="flex space-x-6 pb-4" style={{ scrollSnapType: "x mandatory" }}>
          {industries.map((industry, index) => (
            <div key={index} className="flex-shrink-0 w-80 group cursor-pointer" style={{ scrollSnapAlign: "start" }}>
              <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{industry.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
