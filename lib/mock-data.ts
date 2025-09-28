import type { Incident, Sensor, Alert, MetricData, ChartDataPoint } from "./types"

// Bairros reais de Belém do Pará
export const belemNeighborhoods = [
  "Batista Campos",
  "Nazaré",
  "Umarizal",
  "Reduto",
  "Campina",
  "Cidade Velha",
  "Marco",
  "Pedreira",
  "São Brás",
  "Jurunas",
  "Condor",
  "Cremação",
  "Telégrafo Sem Fio",
  "Val-de-Cans",
  "Canudos",
  "Curió-Utinga",
  "Sacramenta",
  "Marambaia",
  "Barreiro",
  "Souza",
  "Guamá",
  "Terra Firme",
  "Montese",
  "Parque Verde",
  "Universitário",
  "Mangueirão",
  "Benguí",
  "Cabanagem",
  "Tapanã",
  "Pratinha",
  "Coqueiro",
  "Icoaraci",
  "Outeiro",
  "Mosqueiro",
]

// Locais específicos de Belém
export const belemLocations = [
  "Av. Presidente Vargas",
  "Praça da República",
  "Ver-o-Peso",
  "Estação das Docas",
  "Complexo do Ver-o-Peso",
  "Mercado de São Brás",
  "Bosque Rodrigues Alves",
  "Parque da Residência",
  "Arsenal de Marinha",
  "Forte do Presépio",
  "Casa das Onze Janelas",
  "Teatro da Paz",
  "Palacete Pinho",
  "Museu do Círio",
  "Shopping Pátio Belém",
  "Shopping Boulevard",
  "Universidade Federal do Pará",
  "Hospital Universitário João de Barros Barreto",
  "Aeroporto Internacional de Belém",
  "Terminal Rodoviário de Belém",
  "Porto de Belém",
  "Mangal das Garças",
  "Parque Estadual do Utinga",
  "Ilha de Mosqueiro",
  "Distrito de Icoaraci",
  "Feira do Açaí",
  "Mercado de Ferro",
  "Praça Batista Campos",
  "Av. Almirante Barroso",
  "Doca do Souza Franco",
  "Complexo Feliz Lusitânia",
  "Basílica de Nazaré",
]

// Tipos de incidentes urbanos comuns em Belém
export const incidentTypes = [
  "Assalto",
  "Furto de Veículo",
  "Acidente de Trânsito",
  "Perturbação do Sossego",
  "Aglomeração Irregular",
  "Vandalismo",
  "Conflito Doméstico",
  "Roubo a Pedestre",
  "Acidente com Motocicleta",
  "Furto em Estabelecimento",
  "Briga em Via Pública",
  "Invasão de Propriedade",
  "Danos ao Patrimônio Público",
  "Perturbação da Ordem",
]

// Gerar timestamp realista (últimas 24 horas)
function generateRecentTimestamp(): string {
  const now = new Date()
  const hoursAgo = Math.floor(Math.random() * 24)
  const minutesAgo = Math.floor(Math.random() * 60)
  const timestamp = new Date(now.getTime() - hoursAgo * 60 * 60 * 1000 - minutesAgo * 60 * 1000)
  return timestamp.toISOString()
}

// Gerar horário formatado brasileiro
function formatBrazilianTime(timestamp: string): string {
  return new Date(timestamp).toLocaleString("pt-BR", {
    timeZone: "America/Belem",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

// Mock data para incidentes
export const mockIncidents: Incident[] = [
  {
    id: "INC-2024-001",
    type: "Assalto",
    location: "Av. Presidente Vargas, 1200",
    neighborhood: "Campina",
    status: "active",
    priority: "high",
    timestamp: generateRecentTimestamp(),
    description: "Assalto a mão armada reportado por testemunhas. Suspeitos fugiram em motocicleta.",
  },
  {
    id: "INC-2024-002",
    type: "Acidente de Trânsito",
    location: "Av. Almirante Barroso com Travessa Padre Eutíquio",
    neighborhood: "Batista Campos",
    status: "investigating",
    priority: "medium",
    timestamp: generateRecentTimestamp(),
    description: "Colisão entre dois veículos no cruzamento. Trânsito parcialmente interrompido.",
  },
  {
    id: "INC-2024-003",
    type: "Perturbação do Sossego",
    location: "Rua dos Mundurucus, 890",
    neighborhood: "Jurunas",
    status: "resolved",
    priority: "low",
    timestamp: generateRecentTimestamp(),
    description: "Som alto em estabelecimento comercial. Proprietário orientado e volume reduzido.",
  },
  {
    id: "INC-2024-004",
    type: "Furto de Veículo",
    location: "Shopping Pátio Belém - Estacionamento",
    neighborhood: "Umarizal",
    status: "active",
    priority: "high",
    timestamp: generateRecentTimestamp(),
    description: "Veículo Honda Civic prata furtado do estacionamento. Câmeras sendo analisadas.",
  },
  {
    id: "INC-2024-005",
    type: "Aglomeração Irregular",
    location: "Praça da República",
    neighborhood: "Campina",
    status: "investigating",
    priority: "medium",
    timestamp: generateRecentTimestamp(),
    description: "Concentração de pessoas sem autorização. Equipe deslocada para verificação.",
  },
  {
    id: "INC-2024-006",
    type: "Vandalismo",
    location: "Estação das Docas - Área Externa",
    neighborhood: "Campina",
    status: "resolved",
    priority: "low",
    timestamp: generateRecentTimestamp(),
    description: "Pichação em parede externa removida. Área sendo monitorada.",
  },
]

// Mock data para sensores
export const mockSensors: Sensor[] = [
  {
    id: "CAM-001",
    type: "vision",
    location: "Ver-o-Peso - Entrada Principal",
    neighborhood: "Cidade Velha",
    status: "online",
    lastUpdate: generateRecentTimestamp(),
  },
  {
    id: "CAM-002",
    type: "vision",
    location: "Av. Presidente Vargas, 800",
    neighborhood: "Campina",
    status: "online",
    lastUpdate: generateRecentTimestamp(),
  },
  {
    id: "SOM-001",
    type: "noise",
    location: "Praça Batista Campos",
    neighborhood: "Batista Campos",
    status: "online",
    lastUpdate: generateRecentTimestamp(),
  },
  {
    id: "MON-001",
    type: "monitoring",
    location: "Terminal Rodoviário de Belém",
    neighborhood: "São Brás",
    status: "maintenance",
    lastUpdate: generateRecentTimestamp(),
  },
  {
    id: "CAM-003",
    type: "vision",
    location: "Bosque Rodrigues Alves - Portão",
    neighborhood: "Marco",
    status: "online",
    lastUpdate: generateRecentTimestamp(),
  },
]

// Mock data para alertas
export const mockAlerts: Alert[] = [
  {
    id: "ALT-001",
    type: "Movimento Suspeito",
    location: "Mercado de São Brás",
    neighborhood: "São Brás",
    severity: "medium",
    timestamp: generateRecentTimestamp(),
    description: "Pessoa circulando de forma suspeita próximo aos boxes de venda.",
  },
  {
    id: "ALT-002",
    type: "Nível de Ruído Alto",
    location: "Rua João Balbi, 450",
    neighborhood: "Umarizal",
    severity: "low",
    timestamp: generateRecentTimestamp(),
    description: "Nível de ruído acima do permitido detectado por sensor acústico.",
  },
  {
    id: "ALT-003",
    type: "Multidão Detectada",
    location: "Estação das Docas",
    neighborhood: "Campina",
    severity: "high",
    timestamp: generateRecentTimestamp(),
    description: "Concentração anormal de pessoas detectada pelo sistema de visão computacional.",
  },
]

// Métricas do dashboard
export const mockMetrics: MetricData[] = [
  {
    label: "Incidentes Ativos",
    value: 12,
    change: "+3",
    trend: "up",
  },
  {
    label: "Sensores Online",
    value: 137,
    change: "-2",
    trend: "down",
  },
  {
    label: "Alertas Hoje",
    value: 28,
    change: "+8",
    trend: "up",
  },
  {
    label: "Tempo Médio Resposta",
    value: "4.2 min",
    change: "-0.8 min",
    trend: "down",
  },
]

// Dados para gráficos (últimas 24 horas)
export const mockChartData: ChartDataPoint[] = [
  { time: "00:00", value: 2 },
  { time: "02:00", value: 1 },
  { time: "04:00", value: 0 },
  { time: "06:00", value: 3 },
  { time: "08:00", value: 8 },
  { time: "10:00", value: 12 },
  { time: "12:00", value: 15 },
  { time: "14:00", value: 18 },
  { time: "16:00", value: 22 },
  { time: "18:00", value: 25 },
  { time: "20:00", value: 19 },
  { time: "22:00", value: 14 },
]

// Dados por bairro para o mapa
export const mockNeighborhoodData = [
  { neighborhood: "Campina", incidents: 8, risk: "high" },
  { neighborhood: "Umarizal", incidents: 5, risk: "medium" },
  { neighborhood: "Batista Campos", incidents: 3, risk: "low" },
  { neighborhood: "Nazaré", incidents: 4, risk: "medium" },
  { neighborhood: "São Brás", incidents: 6, risk: "medium" },
  { neighborhood: "Jurunas", incidents: 9, risk: "high" },
  { neighborhood: "Marco", incidents: 2, risk: "low" },
  { neighborhood: "Cidade Velha", incidents: 7, risk: "high" },
]

// Função para formatar timestamps para exibição
export function formatTimestamp(timestamp: string): string {
  return formatBrazilianTime(timestamp)
}

// Função para gerar novos incidentes (simulação tempo real)
export function generateRandomIncident(): Incident {
  const types = incidentTypes
  const locations = belemLocations
  const neighborhoods = belemNeighborhoods
  const statuses: Incident["status"][] = ["active", "investigating"]
  const priorities: Incident["priority"][] = ["high", "medium", "low"]

  return {
    id: `INC-2024-${String(Math.floor(Math.random() * 9999)).padStart(3, "0")}`,
    type: types[Math.floor(Math.random() * types.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    neighborhood: neighborhoods[Math.floor(Math.random() * neighborhoods.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    priority: priorities[Math.floor(Math.random() * priorities.length)],
    timestamp: generateRecentTimestamp(),
    description: "Incidente reportado pelo sistema de monitoramento automatizado.",
  }
}
