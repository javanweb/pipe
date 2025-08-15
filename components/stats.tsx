"use client"

import { useEffect, useState } from "react"
import { Section } from "@/components/section"

export function Stats() {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    countries: 0,
    experience: 0,
  })

  const finalCounts = {
    projects: 5000,
    clients: 1200,
    countries: 25,
    experience: 20,
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounts({
        projects: Math.floor(finalCounts.projects * progress),
        clients: Math.floor(finalCounts.clients * progress),
        countries: Math.floor(finalCounts.countries * progress),
        experience: Math.floor(finalCounts.experience * progress),
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts(finalCounts)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    {
      label: "Projects Completed",
      value: counts.projects.toLocaleString(),
      suffix: "+",
    },
    {
      label: "Satisfied Clients",
      value: counts.clients.toLocaleString(),
      suffix: "+",
    },
    {
      label: "Countries Served",
      value: counts.countries.toString(),
      suffix: "",
    },
    {
      label: "Years Experience",
      value: counts.experience.toString(),
      suffix: "+",
    },
  ]

  return (
    <Section className="bg-primary-600 text-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl lg:text-5xl font-bold mb-2">
              {stat.value}
              {stat.suffix}
            </div>
            <div className="text-primary-100 text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
