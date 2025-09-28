"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Eye, Volume2, Activity } from "lucide-react"
import { belemNeighborhoods } from "@/lib/data/belem-locations"

type MapTab = "incidents" | "sensors" | "coverage"

export function MapView() {
  const [activeTab, setActiveTab] = useState<MapTab>("incidents")

  const incidents = [
    {
      id: "1",
      type: "Alagamento",
      location: "Av. Augusto Montenegro, Tapanã",
      severity: "high" as const,
      lat: -1.36,
      lng: -48.4,
    },
    {
      id: "2",
      type: "Roubo",
      location: "Ver-o-Peso, Cidade Velha",
      severity: "medium" as const,
      lat: -1.4558,
      lng: -48.5037,
    },
    {
      id: "3",
      type: "Queda de Árvore",
      location: "Av. Bernardo Sayão, Bengui",
      severity: "low" as const,
      lat: -1.38,
      lng: -48.42,
    },
    {
      id: "4",
      type: "Acidente de Trânsito",
      location: "Av. Presidente Vargas, Campina",
      severity: "high" as const,
      lat: -1.4502,
      lng: -48.4902,
    },
    {
      id: "5",
      type: "Vandalismo",
      location: "Rua dos Mundurucus, Guamá",
      severity: "medium" as const,
      lat: -1.475,
      lng: -48.46,
    },
  ]

  const sensors = [
    {
      id: "1",
      type: "vision" as const,
      location: "Teatro da Paz, Cidade Velha",
      status: "online" as const,
      lat: -1.4558,
      lng: -48.502,
    },
    {
      id: "2",
      type: "noise" as const,
      location: "Mercado de São Brás, São Brás",
      status: "online" as const,
      lat: -1.46,
      lng: -48.48,
    },
    {
      id: "3",
      type: "monitoring" as const,
      location: "Estação das Docas, Campina",
      status: "maintenance" as const,
      lat: -1.4502,
      lng: -48.492,
    },
    {
      id: "4",
      type: "vision" as const,
      location: "Basílica de Nazaré, Nazaré",
      status: "online" as const,
      lat: -1.45,
      lng: -48.485,
    },
    {
      id: "5",
      type: "noise" as const,
      location: "Mangal das Garças, Cidade Velha",
      status: "offline" as const,
      lat: -1.458,
      lng: -48.505,
    },
  ]

  const getSeverityColor = (severity: "high" | "medium" | "low") => {
    switch (severity) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-orange-500"
      case "low":
        return "bg-green-500"
    }
  }

  const getStatusColor = (status: "online" | "offline" | "maintenance") => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "offline":
        return "bg-red-500"
      case "maintenance":
        return "bg-orange-500"
    }
  }

  const getSensorIcon = (type: "vision" | "noise" | "monitoring") => {
    switch (type) {
      case "vision":
        return Eye
      case "noise":
        return Volume2
      case "monitoring":
        return Activity
    }
  }

  return (
    <div className="p-6 h-full">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
        {/* Map Area */}
        <div className="lg:col-span-3">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Mapa Regional - Belém do Pará</CardTitle>
                <div className="flex space-x-2">
                  <Button
                    variant={activeTab === "incidents" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab("incidents")}
                  >
                    Incidentes
                  </Button>
                  <Button
                    variant={activeTab === "sensors" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab("sensors")}
                  >
                    Sensores
                  </Button>
                  <Button
                    variant={activeTab === "coverage" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab("coverage")}
                  >
                    Cobertura
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="h-full">
              {/* Placeholder for Google Maps */}
              <div className="w-full h-96 bg-muted rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20">
                  {/* Simulated map with markers */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <MapPin className="h-12 w-12 text-primary mx-auto" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Mapa de Belém do Pará</h3>
                        <p className="text-sm text-muted-foreground">
                          Visualização de{" "}
                          {activeTab === "incidents"
                            ? "incidentes"
                            : activeTab === "sensors"
                              ? "sensores"
                              : "cobertura"}{" "}
                          em tempo real
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Simulated markers based on active tab */}
                  {activeTab === "incidents" &&
                    incidents.map((incident, index) => (
                      <div
                        key={incident.id}
                        className={`absolute w-4 h-4 rounded-full ${getSeverityColor(incident.severity)} border-2 border-white shadow-lg`}
                        style={{
                          left: `${20 + index * 25}%`,
                          top: `${30 + index * 15}%`,
                        }}
                      />
                    ))}

                  {activeTab === "sensors" &&
                    sensors.map((sensor, index) => (
                      <div
                        key={sensor.id}
                        className={`absolute w-4 h-4 rounded-full ${getStatusColor(sensor.status)} border-2 border-white shadow-lg`}
                        style={{
                          left: `${25 + index * 20}%`,
                          top: `${40 + index * 10}%`,
                        }}
                      />
                    ))}

                  {activeTab === "coverage" && (
                    <div className="absolute inset-4 border-2 border-dashed border-primary/50 rounded-lg bg-primary/10">
                      <div className="absolute top-2 left-2">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Área de Cobertura: 85%
                        </Badge>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-4">
          {activeTab === "incidents" && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Incidentes Ativos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {incidents.map((incident) => (
                  <div
                    key={incident.id}
                    className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <div className={`w-3 h-3 rounded-full ${getSeverityColor(incident.severity)} mt-1.5`} />
                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm font-medium text-foreground">{incident.type}</h4>
                      <p className="text-xs text-muted-foreground">{incident.location}</p>
                      <Badge variant="outline" className="text-xs">
                        {incident.severity === "high" ? "Alto" : incident.severity === "medium" ? "Médio" : "Baixo"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {activeTab === "sensors" && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Status dos Sensores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {sensors.map((sensor) => {
                  const IconComponent = getSensorIcon(sensor.type)
                  return (
                    <div
                      key={sensor.id}
                      className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <IconComponent className="h-4 w-4 text-muted-foreground mt-1" />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(sensor.status)}`} />
                          <h4 className="text-sm font-medium text-foreground">
                            {sensor.type === "vision" ? "Visão" : sensor.type === "noise" ? "Ruído" : "Monitoramento"}
                          </h4>
                        </div>
                        <p className="text-xs text-muted-foreground">{sensor.location}</p>
                        <Badge variant="outline" className="text-xs">
                          {sensor.status === "online"
                            ? "Online"
                            : sensor.status === "offline"
                              ? "Offline"
                              : "Manutenção"}
                        </Badge>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          )}

          {activeTab === "coverage" && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Cobertura por Região</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {belemNeighborhoods.slice(0, 8).map((neighborhood, index) => {
                  const coverage = Math.floor(Math.random() * 40) + 60 // 60-100%
                  return (
                    <div key={neighborhood} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground">{neighborhood}</span>
                        <span className="text-muted-foreground">{coverage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${coverage}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          )}

          {/* Legend */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Legenda</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {activeTab === "incidents" && (
                <>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-xs text-muted-foreground">Severidade Alta</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500" />
                    <span className="text-xs text-muted-foreground">Severidade Média</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-muted-foreground">Severidade Baixa</span>
                  </div>
                </>
              )}
              {activeTab === "sensors" && (
                <>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-muted-foreground">Sensor Online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500" />
                    <span className="text-xs text-muted-foreground">Em Manutenção</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-xs text-muted-foreground">Sensor Offline</span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
