"use client"

import { useAuth } from "@/lib/auth-context"
import { StatusCard } from "./status-card"
import { MetricsGrid } from "./metrics-grid"
import { IncidentChart } from "./incident-chart"
import { AlertsPanel } from "./alerts-panel"
import { RecentIncidents } from "./recent-incidents"

export function DashboardContent() {
  const { user } = useAuth()
  const companyType = user?.company.type

  return (
    <div className="p-6 space-y-6">
      {/* Status Card */}
      <StatusCard />

      {/* Metrics Grid */}
      <MetricsGrid companyType={companyType} />

      {/* Charts and Alerts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IncidentChart companyType={companyType} />
        <AlertsPanel companyType={companyType} />
      </div>

      {/* Recent Incidents */}
      <RecentIncidents companyType={companyType} />
    </div>
  )
}
