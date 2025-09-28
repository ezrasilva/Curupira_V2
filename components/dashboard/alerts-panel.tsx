"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Shield, Car, Home } from "lucide-react"
import type { CompanyType } from "@/lib/types"
import { useRealTimeData } from "@/lib/hooks/use-real-time-data"

interface AlertsPanelProps {
  companyType?: CompanyType
}

export function AlertsPanel({ companyType }: AlertsPanelProps) {
  const { alerts } = useRealTimeData(companyType)

  const getAlertIcon = (type: string) => {
    if (type.includes("Propriedade") || type.includes("Dano")) return Home
    if (type.includes("Auto") || type.includes("Veicular")) return Car
    if (type.includes("Prevenção") || type.includes("Atividade")) return Shield
    return AlertTriangle
  }

  const getSeverityColor = (severity: "high" | "medium" | "low") => {
    switch (severity) {
      case "high":
        return "bg-red-500/10 text-red-600 border-red-500/20"
      case "medium":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20"
      case "low":
        return "bg-green-500/10 text-green-600 border-green-500/20"
    }
  }

  const getSeverityText = (severity: "high" | "medium" | "low") => {
    switch (severity) {
      case "high":
        return "Alto"
      case "medium":
        return "Médio"
      case "low":
        return "Baixo"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Alertas Ativos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.slice(0, 3).map((alert) => {
          const IconComponent = getAlertIcon(alert.type)
          return (
            <div
              key={alert.id}
              className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <IconComponent className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-foreground">{alert.type}</h4>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
                <p className="text-xs text-muted-foreground">{alert.location}</p>
                <Badge variant="outline" className={getSeverityColor(alert.severity)}>
                  {getSeverityText(alert.severity)}
                </Badge>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
