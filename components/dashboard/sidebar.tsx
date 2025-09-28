"use client"

import { BarChart3, Map, Eye, Volume2, Activity, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"
import Image from "next/image"

interface SidebarProps {
  activeView: "dashboard" | "map"
  onViewChange: (view: "dashboard" | "map") => void
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const { user, logout } = useAuth()

  return (
    <aside className="w-80 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Company Info */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
            <Image src="/images/curupira-logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <div>
            <h2 className="font-semibold text-sidebar-foreground">{user?.company.name}</h2>
            <p className="text-xs text-muted-foreground">
              {user?.company.type === "security" ? "Empresa de Segurança" : "Seguradora"}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 space-y-2">
        <Button
          variant={activeView === "dashboard" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => onViewChange("dashboard")}
        >
          <BarChart3 className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button
          variant={activeView === "map" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => onViewChange("map")}
        >
          <Map className="mr-2 h-4 w-4" />
          Mapa Regional
        </Button>
      </div>

      {/* Sensors Section */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-sidebar-foreground mb-3">SENSORES ATIVOS</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-sidebar-foreground">Visão Computacional</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              42
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Volume2 className="h-4 w-4 text-orange-500" />
              <span className="text-sm text-sidebar-foreground">Sensores de Ruído</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              28
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="h-4 w-4 text-green-500" />
              <span className="text-sm text-sidebar-foreground">Monitoramento Ativo</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              67
            </Badge>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="p-4">
        <Card className="bg-sidebar-accent border-sidebar-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-sidebar-foreground">Status do Sistema</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Uptime</span>
              <span className="text-green-600 font-medium">99.2%</span>
            </div>
            <Progress value={99.2} className="h-2" />
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Última atualização</span>
              <span className="text-sidebar-foreground">1 min atrás</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Logout Button */}
      <div className="mt-auto p-4">
        <Button
          variant="outline"
          className="w-full justify-start border-sidebar-border bg-transparent"
          onClick={logout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </Button>
      </div>
    </aside>
  )
}
