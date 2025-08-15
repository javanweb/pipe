import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
  id?: string
}

export function Section({ children, className, title, description, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 lg:py-24", className)}>
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">{title}</h2>}
            {description && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
