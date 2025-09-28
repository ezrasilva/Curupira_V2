"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { CompanyType } from "@/lib/types"
import { useRealTimeData } from "@/lib/hooks/use-real-time-data"

interface RecentIncidentsProps {
  companyType?: CompanyType
}

export function RecentIncidents({ companyType }: RecentIncidentsProps) {
  const { incidents } = useRealTimeData(companyType)

  const getStatusColor = (status: "active" | "resolved" | "investigating") => {
    switch (status) {
      case "active":
        return "bg-red-500/10 text-red-600 border-red-500/20"
      case "investigating":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20"
      case "resolved":
        return "bg-green-500/10 text-green-600 border-green-500/20"
    }
  }

  const getStatusText = (status: "active" | "resolved" | "investigating") => {
    switch (status) {
      case "active":
        return "Ativo"
      case "investigating":
        return "Investigando"
      case "resolved":
        return "Resolvido"
    }
  }

  const getPriorityColor = (priority: "high" | "medium" | "low") => {
    switch (priority) {
      case "high":
        return "bg-red-500/10 text-red-600 border-red-500/20"
      case "medium":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20"
      case "low":
        return "bg-green-500/10 text-green-600 border-green-500/20"
    }
  }

  const getPriorityText = (priority: "high" | "medium" | "low") => {
    switch (priority) {
      case "high":
        return "Alta"
      case "medium":
        return "Média"
      case "low":
        return "Baixa"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          {companyType === "security" ? "Incidentes Recentes" : "Sinistros Recentes"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 text-sm font-medium text-muted-foreground">ID</th>
                <th className="text-left py-2 px-3 text-sm font-medium text-muted-foreground">Tipo</th>
                <th className="text-left py-2 px-3 text-sm font-medium text-muted-foreground">Localização</th>
                <th className="text-left py-2 px-3 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left py-2 px-3 text-sm font-medium text-muted-foreground">Prioridade</th>
                <th className="text-left py-2 px-3 text-sm font-medium text-muted-foreground">Horário</th>
              </tr>
            </thead>
            <tbody>
              {incidents.slice(0, 5).map((incident) => (
                <tr key={incident.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-3 text-sm font-mono text-foreground">{incident.id}</td>
                  <td className="py-3 px-3 text-sm text-foreground">{incident.type}</td>
                  <td className="py-3 px-3 text-sm text-muted-foreground">{incident.location}</td>
                  <td className="py-3 px-3">
                    <Badge variant="outline" className={getStatusColor(incident.status)}>
                      {getStatusText(incident.status)}
                    </Badge>
                  </td>
                  <td className="py-3 px-3">
                    <Badge variant="outline" className={getPriorityColor(incident.priority)}>
                      {getPriorityText(incident.priority)}
                    </Badge>
                  </td>
                  <td className="py-3 px-3 text-sm text-muted-foreground">{incident.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
