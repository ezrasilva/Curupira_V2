"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import type { CompanyType } from "@/lib/types"
import { useRealTimeData } from "@/lib/hooks/use-real-time-data"

interface MetricsGridProps {
  companyType?: CompanyType
}

export function MetricsGrid({ companyType }: MetricsGridProps) {
  const { metrics } = useRealTimeData(companyType)

  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-500" />
      default:
        return <Minus className="h-4 w-4 text-gray-500" />
    }
  }

  const getTrendColor = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return "text-green-600"
      case "down":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <div className={`flex items-center space-x-1 text-sm ${getTrendColor(metric.trend)}`}>
                {getTrendIcon(metric.trend)}
                <span>{metric.change}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
