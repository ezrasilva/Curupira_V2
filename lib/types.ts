export type CompanyType = "security" | "insurance"

export interface Company {
  name: string
  type: CompanyType
}

export interface User {
  company: Company
}

export interface Incident {
  id: string
  type: string
  location: string
  neighborhood: string
  status: "active" | "resolved" | "investigating"
  priority: "high" | "medium" | "low"
  timestamp: string
  description?: string
}

export interface Sensor {
  id: string
  type: "vision" | "noise" | "monitoring"
  location: string
  neighborhood: string
  status: "online" | "offline" | "maintenance"
  lastUpdate: string
}

export interface Alert {
  id: string
  type: string
  location: string
  neighborhood: string
  severity: "high" | "medium" | "low"
  timestamp: string
  description: string
}

export interface MetricData {
  label: string
  value: string | number
  change?: string
  trend?: "up" | "down" | "stable"
}

export interface ChartDataPoint {
  time: string
  value: number
  category?: string
}
