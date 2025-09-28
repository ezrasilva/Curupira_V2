"use client"

import { useState } from "react"
import { Header } from "./dashboard/header"
import { Sidebar } from "./dashboard/sidebar"
import { DashboardContent } from "./dashboard/dashboard-content"
import { MapView } from "./dashboard/map-view"

export function Dashboard() {
  const [activeView, setActiveView] = useState<"dashboard" | "map">("dashboard")

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">{activeView === "dashboard" ? <DashboardContent /> : <MapView />}</main>
      </div>
    </div>
  )
}
