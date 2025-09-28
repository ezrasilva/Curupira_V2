"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import type { CompanyType } from "@/lib/types"

interface IncidentChartProps {
  companyType?: CompanyType
}

export function IncidentChart({ companyType }: IncidentChartProps) {
  const securityData = [
    { time: "00:00", crimes: 2, alagamentos: 0, quedaArvores: 1 },
    { time: "04:00", crimes: 1, alagamentos: 1, quedaArvores: 0 },
    { time: "08:00", crimes: 3, alagamentos: 2, quedaArvores: 2 },
    { time: "12:00", crimes: 5, alagamentos: 1, quedaArvores: 1 },
    { time: "16:00", crimes: 4, alagamentos: 3, quedaArvores: 2 },
    { time: "20:00", crimes: 6, alagamentos: 1, quedaArvores: 0 },
  ]

  const insuranceData = [
    { time: "00:00", propriedade: 120000, automovel: 80000 },
    { time: "04:00", propriedade: 110000, automovel: 75000 },
    { time: "08:00", propriedade: 150000, automovel: 95000 },
    { time: "12:00", propriedade: 180000, automovel: 120000 },
    { time: "16:00", propriedade: 160000, automovel: 110000 },
    { time: "20:00", propriedade: 140000, automovel: 90000 },
  ]

  if (companyType === "security") {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Incidentes por Horário</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={securityData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="crimes" stroke="#ef4444" strokeWidth={2} name="Crimes" />
              <Line type="monotone" dataKey="alagamentos" stroke="#3b82f6" strokeWidth={2} name="Alagamentos" />
              <Line type="monotone" dataKey="quedaArvores" stroke="#22c55e" strokeWidth={2} name="Queda de Árvores" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Exposição ao Risco (R$)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={insuranceData}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey="time" />
            <YAxis tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}K`} />
            <Tooltip formatter={(value) => [`R$ ${Number(value).toLocaleString()}`, ""]} />
            <Area
              type="monotone"
              dataKey="propriedade"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
              name="Propriedade"
            />
            <Area
              type="monotone"
              dataKey="automovel"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
              name="Automóvel"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
