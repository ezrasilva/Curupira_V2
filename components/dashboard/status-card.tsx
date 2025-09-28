"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Wifi, Clock } from "lucide-react"
import { useRealTimeData } from "@/lib/hooks/use-real-time-data"
import { useAuth } from "@/lib/auth-context"

export function StatusCard() {
  const { user } = useAuth()
  const { lastUpdate } = useRealTimeData(user?.company.type)

  return (
    <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-green" />
              <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                Sistema Online
              </Badge>
            </div>
            <div className="text-xs text-muted-foreground">
              Última atualização: {lastUpdate.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Sensores Ativos</p>
                <p className="text-xl font-bold text-foreground">73</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Wifi className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Conectividade</p>
                <p className="text-xl font-bold text-green-600">100%</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Uptime</p>
                <p className="text-xl font-bold text-foreground">99.8%</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
