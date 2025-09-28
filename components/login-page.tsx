"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { CompanyType } from "@/lib/types"
import Image from "next/image"

export function LoginPage() {
  const [companyName, setCompanyName] = useState("")
  const [companyType, setCompanyType] = useState<CompanyType | "">("")
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (companyName && companyType) {
      login({ name: companyName, type: companyType as CompanyType })
    }
  }

  const isFormValid = companyName.trim() !== "" && companyType !== ""

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative w-24 h-24">
              <Image src="/images/curupira-logo.png" alt="Curupira Logo" fill className="object-contain" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">CURUPIRA</h1>
            <p className="text-sm text-muted-foreground font-medium tracking-wide">A MALHA PROTETORA</p>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Sistema de Monitoramento Urbano
            </Badge>
          </div>
        </div>

        {/* Login Form */}
        <Card className="border-border/50 shadow-2xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-xl">Acesso ao Sistema</CardTitle>
            <CardDescription>Entre com as credenciais da sua empresa</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Nome da Empresa</Label>
                <Input
                  id="company-name"
                  type="text"
                  placeholder="Digite o nome da sua empresa"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-type">Tipo de Empresa</Label>
                <Select value={companyType} onValueChange={(value: CompanyType) => setCompanyType(value)}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Selecione o tipo de empresa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="security">Empresa de Segurança</SelectItem>
                    <SelectItem value="insurance">Seguradora</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full h-11 mt-6" disabled={!isFormValid}>
                Acessar Sistema
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground">
          <p>Sistema de Monitoramento de Incidentes Urbanos</p>
          <p className="mt-1">Belém do Pará • Tempo Real</p>
        </div>
      </div>
    </div>
  )
}
