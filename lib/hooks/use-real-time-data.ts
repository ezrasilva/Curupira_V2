"use client"

import { useState, useEffect } from "react"
import type { CompanyType } from "@/lib/types"
import { getRandomLocation, getRandomLandmark } from "@/lib/data/belem-locations"

export function useRealTimeData(companyType?: CompanyType) {
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [metrics, setMetrics] = useState(() => generateInitialMetrics(companyType))
  const [alerts, setAlerts] = useState(() => generateInitialAlerts(companyType))
  const [incidents, setIncidents] = useState(() => generateInitialIncidents(companyType))

  useEffect(() => {
    // Simulate real-time updates every 30 seconds
    const interval = setInterval(() => {
      setLastUpdate(new Date())

      // Randomly update metrics
      if (Math.random() > 0.7) {
        setMetrics(generateInitialMetrics(companyType))
      }

      // Randomly add new alerts
      if (Math.random() > 0.8) {
        setAlerts((prev) => [generateRandomAlert(companyType), ...prev.slice(0, 4)])
      }

      // Randomly add new incidents
      if (Math.random() > 0.9) {
        setIncidents((prev) => [generateRandomIncident(companyType), ...prev.slice(0, 9)])
      }
    }, 30000)

    return () => clearInterval(interval)
  }, [companyType])

  return {
    metrics,
    alerts,
    incidents,
    lastUpdate,
  }
}

function generateInitialMetrics(companyType?: CompanyType) {
  if (companyType === "security") {
    return [
      {
        title: "Incidentes Ativos",
        value: Math.floor(Math.random() * 20) + 5,
        change: Math.random() > 0.5 ? `+${Math.floor(Math.random() * 5)}` : `-${Math.floor(Math.random() * 3)}`,
        trend: Math.random() > 0.5 ? ("up" as const) : ("down" as const),
      },
      {
        title: "Áreas Monitoradas",
        value: 45,
        change: "0",
        trend: "stable" as const,
      },
      {
        title: "Tempo de Resposta Médio",
        value: `${(Math.random() * 3 + 2).toFixed(1)}min`,
        change: `${Math.random() > 0.5 ? "-" : "+"}${(Math.random() * 0.5).toFixed(1)}min`,
        trend: Math.random() > 0.5 ? ("down" as const) : ("up" as const),
      },
      {
        title: "Sensores Ativos",
        value: Math.floor(Math.random() * 10) + 70,
        change: Math.random() > 0.5 ? `+${Math.floor(Math.random() * 3)}` : `-${Math.floor(Math.random() * 2)}`,
        trend: Math.random() > 0.5 ? ("up" as const) : ("down" as const),
      },
    ]
  }

  return [
    {
      title: "Sinistros Potenciais",
      value: Math.floor(Math.random() * 15) + 3,
      change: Math.random() > 0.5 ? `+${Math.floor(Math.random() * 4)}` : `-${Math.floor(Math.random() * 2)}`,
      trend: Math.random() > 0.5 ? ("up" as const) : ("down" as const),
    },
    {
      title: "Valor em Risco",
      value: `R$ ${(Math.random() * 2 + 1.5).toFixed(1)}M`,
      change: `${Math.random() > 0.5 ? "+" : "-"}R$ ${(Math.random() * 500).toFixed(0)}K`,
      trend: Math.random() > 0.5 ? ("up" as const) : ("down" as const),
    },
    {
      title: "Clientes Afetados",
      value: Math.floor(Math.random() * 100) + 120,
      change: Math.random() > 0.5 ? `+${Math.floor(Math.random() * 20)}` : `-${Math.floor(Math.random() * 10)}`,
      trend: Math.random() > 0.5 ? ("up" as const) : ("down" as const),
    },
    {
      title: "Prevenção Ativa",
      value: `${Math.floor(Math.random() * 10) + 88}%`,
      change: `${Math.random() > 0.5 ? "+" : "-"}${Math.floor(Math.random() * 5)}%`,
      trend: Math.random() > 0.5 ? ("up" as const) : ("down" as const),
    },
  ]
}

function generateInitialAlerts(companyType?: CompanyType) {
  const securityAlerts = [
    "Alagamento",
    "Atividade Suspeita",
    "Queda de Árvore",
    "Acidente de Trânsito",
    "Roubo",
    "Vandalismo",
    "Perturbação da Ordem",
    "Incêndio",
  ]

  const insuranceAlerts = [
    "Risco Elevado - Propriedade",
    "Sinistro Potencial - Auto",
    "Prevenção Ativada",
    "Dano à Propriedade",
    "Colisão Veicular",
    "Dano por Alagamento",
    "Risco Meteorológico",
  ]

  const alertTypes = companyType === "security" ? securityAlerts : insuranceAlerts

  return Array.from({ length: 3 }, (_, i) => generateRandomAlert(companyType, i))
}

function generateRandomAlert(companyType?: CompanyType, index = 0) {
  const securityAlerts = [
    "Alagamento",
    "Atividade Suspeita",
    "Queda de Árvore",
    "Acidente de Trânsito",
    "Roubo",
    "Vandalismo",
    "Perturbação da Ordem",
    "Incêndio",
  ]

  const insuranceAlerts = [
    "Risco Elevado - Propriedade",
    "Sinistro Potencial - Auto",
    "Prevenção Ativada",
    "Dano à Propriedade",
    "Colisão Veicular",
    "Dano por Alagamento",
    "Risco Meteorológico",
  ]

  const alertTypes = companyType === "security" ? securityAlerts : insuranceAlerts
  const severities = ["high", "medium", "low"] as const
  const location = getRandomLocation()

  const uselandmark = Math.random() > 0.7
  const finalLocation = uselandmark ? `${getRandomLandmark()}, ${location.neighborhood}` : location.full

  return {
    id: `alert-${Date.now()}-${index}`,
    type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
    location: finalLocation,
    severity: severities[Math.floor(Math.random() * severities.length)],
    time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
  }
}

function generateInitialIncidents(companyType?: CompanyType) {
  return Array.from({ length: 8 }, (_, i) => generateRandomIncident(companyType, i))
}

function generateRandomIncident(companyType?: CompanyType, index = 0) {
  const securityIncidents = [
    "Roubo",
    "Alagamento",
    "Acidente de Trânsito",
    "Vandalismo",
    "Atividade Suspeita",
    "Queda de Árvore",
    "Perturbação da Ordem",
    "Incêndio",
    "Furto de Veículo",
    "Conflito Urbano",
  ]

  const insuranceIncidents = [
    "Dano à Propriedade",
    "Sinistro Automotivo",
    "Prevenção Acionada",
    "Colisão",
    "Dano Estrutural",
    "Alagamento Residencial",
    "Dano por Temporal",
    "Roubo de Veículo",
    "Incêndio Residencial",
    "Dano Elétrico",
  ]

  const incidentTypes = companyType === "security" ? securityIncidents : insuranceIncidents
  const statuses = ["active", "resolved", "investigating"] as const
  const priorities = ["high", "medium", "low"] as const

  const operators = [
    "João Silva",
    "Maria Santos",
    "Carlos Lima",
    "Ana Costa",
    "Roberto Alves",
    "Lucia Ferreira",
    "Pedro Nascimento",
    "Carla Oliveira",
    "José Pereira",
    "Fernanda Souza",
    "Antonio Ribeiro",
    "Juliana Martins",
  ]

  const location = getRandomLocation()

  const uselandmark = Math.random() > 0.6
  const finalLocation = uselandmark ? `${getRandomLandmark()}, ${location.neighborhood}` : location.full

  const prefix = companyType === "security" ? "INC" : "SIN"

  return {
    id: `${prefix}-2024-${String(Math.floor(Math.random() * 999) + 1).padStart(3, "0")}`,
    type: incidentTypes[Math.floor(Math.random() * incidentTypes.length)],
    location: finalLocation,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    priority: priorities[Math.floor(Math.random() * priorities.length)],
    time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    operator: operators[Math.floor(Math.random() * operators.length)],
  }
}
