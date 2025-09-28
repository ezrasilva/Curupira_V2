export const belemNeighborhoods = [
  "Batista Campos",
  "Nazaré",
  "Cidade Velha",
  "Campina",
  "Reduto",
  "Umarizal",
  "Marco",
  "São Brás",
  "Pedreira",
  "Cremação",
  "Jurunas",
  "Condor",
  "Canudos",
  "Guamá",
  "Terra Firme",
  "Sacramenta",
  "Val-de-Cans",
  "Marambaia",
  "Icoaraci",
  "Outeiro",
  "Mosqueiro",
  "Cabanagem",
  "Una",
  "Águas Lindas",
  "Coqueiro",
  "Pratinha",
  "Bengui",
  "Tapanã",
  "Souza",
  "Curió-Utinga",
  "Telégrafo",
  "Barreiro",
  "Mangueirão",
  "Parque Verde",
  "Castanheira",
  "Águas Brancas",
  "Maracacuera",
  "Ananindeua Centro",
  "Cidade Nova",
  "Coqueiro",
]

export const belemStreets = [
  "Av. Presidente Vargas",
  "Av. Nazaré",
  "Av. Governador José Malcher",
  "Av. Almirante Barroso",
  "Av. Senador Lemos",
  "Av. Visconde de Souza Franco",
  "Av. Júlio César",
  "Av. Pedro Miranda",
  "Av. Arthur Bernardes",
  "Av. Generalíssimo Deodoro",
  "Av. Augusto Montenegro",
  "Av. Bernardo Sayão",
  "Av. João Paulo II",
  "Av. Duque de Caxias",
  "Av. Magalhães Barata",
  "Rua dos Mundurucus",
  "Rua Boaventura da Silva",
  "Rua dos Caripunas",
  "Rua Oliveira Belo",
  "Rua dos Tamoios",
  "Rua Aristides Lobo",
  "Rua Serzedelo Corrêa",
  "Rua Fernando Guilhon",
  "Rua Municipalidade",
  "Rua Santo Antônio",
  "Rua dos Pariquis",
  "Rua Diogo Moia",
  "Rua Padre Eutíquio",
  "Rua Jerônimo Pimentel",
  "Rua Quintino Bocaiúva",
  "Rua 28 de Setembro",
  "Rua Bernal do Couto",
  "Rua Conselheiro Furtado",
  "Rua Dr. Assis",
  "Rua Timbiras",
]

export const belemLandmarks = [
  "Ver-o-Peso",
  "Teatro da Paz",
  "Mercado de São Brás",
  "Estação das Docas",
  "Casa das Onze Janelas",
  "Museu Paraense Emílio Goeldi",
  "Basílica de Nazaré",
  "Forte do Presépio",
  "Palácio Antônio Lemos",
  "Arsenal de Marinha",
  "Mangal das Garças",
  "Parque Estadual do Utinga",
  "Shopping Pátio Belém",
  "Universidade Federal do Pará",
  "Hospital Universitário João de Barros Barreto",
  "Mercado do Ver-o-Peso",
  "Complexo Feliz Lusitânia",
  "Bosque Rodrigues Alves",
  "Memorial dos Povos",
  "Hangar Centro de Convenções",
]

export const belemCoordinates = {
  "Cidade Velha": { lat: -1.4558, lng: -48.5037 },
  Campina: { lat: -1.4502, lng: -48.4902 },
  Nazaré: { lat: -1.45, lng: -48.485 },
  "Batista Campos": { lat: -1.442, lng: -48.488 },
  Umarizal: { lat: -1.438, lng: -48.482 },
  Reduto: { lat: -1.448, lng: -48.495 },
  "São Brás": { lat: -1.46, lng: -48.48 },
  Marco: { lat: -1.42, lng: -48.47 },
  Pedreira: { lat: -1.435, lng: -48.475 },
  Cremação: { lat: -1.425, lng: -48.465 },
  Jurunas: { lat: -1.465, lng: -48.495 },
  Guamá: { lat: -1.475, lng: -48.46 },
  "Terra Firme": { lat: -1.48, lng: -48.455 },
  Bengui: { lat: -1.38, lng: -48.42 },
  Tapanã: { lat: -1.36, lng: -48.4 },
  Icoaraci: { lat: -1.3089, lng: -48.4878 },
  Outeiro: { lat: -1.2667, lng: -48.4667 },
  Mosqueiro: { lat: -1.1333, lng: -48.3833 },
}

export function getRandomLocation() {
  const neighborhood = belemNeighborhoods[Math.floor(Math.random() * belemNeighborhoods.length)]
  const street = belemStreets[Math.floor(Math.random() * belemStreets.length)]
  const coordinates = belemCoordinates[neighborhood as keyof typeof belemCoordinates] || {
    lat: -1.4558 + (Math.random() - 0.5) * 0.2,
    lng: -48.5037 + (Math.random() - 0.5) * 0.2,
  }

  return {
    street,
    neighborhood,
    full: `${street}, ${neighborhood}`,
    coordinates,
  }
}

export function getRandomNeighborhood() {
  return belemNeighborhoods[Math.floor(Math.random() * belemNeighborhoods.length)]
}

export function getRandomLandmark() {
  return belemLandmarks[Math.floor(Math.random() * belemLandmarks.length)]
}
