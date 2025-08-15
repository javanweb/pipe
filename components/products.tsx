import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/section"

export function Products() {
  const products = [
    {
      title: "Polypropylene (PPR) Piping Systems",
      description:
        "High-performance piping systems for hot and cold water applications with excellent chemical resistance.",
      image: "/polypropylene-pipes-fittings.png",
      href: "/products/polypropylene",
    },
    {
      title: "Brass Valves and Fittings",
      description:
        "Premium brass components designed for durability and reliable performance in demanding environments.",
      image: "/placeholder-enrbd.png",
      href: "/products/brass-valves",
    },
    {
      title: "Press Fittings and Extensions",
      description: "Quick-connect press fitting systems for efficient installation and maintenance-free operation.",
      image: "/press-fitting-pipes.png",
      href: "/products/press-fittings",
    },
    {
      title: "Polypropylene (PP) Piping Systems",
      description: "Versatile PP piping solutions for industrial applications with superior chemical compatibility.",
      image: "/placeholder-cqajb.png",
      href: "/products/pp-systems",
    },
    {
      title: "PEX Axial Fittings",
      description: "Advanced PEX connection systems offering flexibility and reliability for modern installations.",
      image: "/placeholder-ttc6q.png",
      href: "/products/pex-fittings",
    },
    {
      title: "Taps and Connectors",
      description: "Complete range of taps, connectors, and accessories for comprehensive system integration.",
      image: "/industrial-pipe-taps.png",
      href: "/products/connectors",
    },
  ]

  return (
    <Section
      title="Products"
      description="Comprehensive range of industrial piping solutions designed for reliability and performance"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-3 group-hover:text-primary-600 transition-colors">
                {product.title}
              </CardTitle>
              <CardDescription className="text-gray-600 mb-4">{product.description}</CardDescription>
              <Button variant="ghost" className="p-0 h-auto text-primary-600 hover:text-primary-700">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button size="lg" variant="outline">
          All Categories
        </Button>
      </div>
    </Section>
  )
}
