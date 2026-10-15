// Todas as informações da barbearia ficam aqui. Troque o número do WhatsApp,
// endereço, horários e serviços neste arquivo — o site inteiro se atualiza.

export const site = {
  name: 'Dom Navalha',
  tagline: 'Barbearia clássica',
  // Somente dígitos: código do país + DDD + número (ex.: 5511987654321)
  whatsapp: '5511999999999',
  whatsappDisplay: '(11) 99999-9999',
  instagram: 'domnavalha',
  address: 'Rua Augusta, 1520 — Consolação, São Paulo/SP',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Augusta+1520+Sao+Paulo',
  hours: [
    { days: 'Terça a sexta', time: '9h às 20h' },
    { days: 'Sábado', time: '8h às 18h' },
    { days: 'Domingo e segunda', time: 'Fechado' },
  ],
}

export type Service = {
  id: string
  name: string
  description: string
  price: number
  duration: string
  featured?: boolean
}

export const services: Service[] = [
  {
    id: 'corte',
    name: 'Corte masculino',
    description: 'Tesoura ou máquina, finalizado com lavagem e pomada.',
    price: 55,
    duration: '40 min',
  },
  {
    id: 'degrade',
    name: 'Degradê navalhado',
    description: 'Fade preciso com acabamento na navalha.',
    price: 65,
    duration: '50 min',
  },
  {
    id: 'barba',
    name: 'Barba com toalha quente',
    description: 'Ritual completo: toalha quente, óleo, navalha e balm.',
    price: 45,
    duration: '30 min',
  },
  {
    id: 'combo',
    name: 'Corte + Barba',
    description: 'O clássico da casa. Saia pronto para qualquer ocasião.',
    price: 90,
    duration: '1h10',
    featured: true,
  },
  {
    id: 'pezinho',
    name: 'Pezinho e sobrancelha',
    description: 'Manutenção rápida entre um corte e outro.',
    price: 25,
    duration: '15 min',
  },
  {
    id: 'pigmentacao',
    name: 'Pigmentação de barba',
    description: 'Preenche falhas e realça o desenho da barba.',
    price: 40,
    duration: '30 min',
  },
]

export const testimonials = [
  {
    name: 'Rafael M.',
    text: 'Melhor degradê que já fiz. Ambiente top, café bom e marquei tudo pelo WhatsApp em dois minutos.',
  },
  {
    name: 'Thiago S.',
    text: 'A barba com toalha quente é outro nível. Virei cliente fixo.',
  },
  {
    name: 'Lucas A.',
    text: 'Pontuais, caprichosos e sem enrolação. Recomendo de olhos fechados.',
  },
]

export function whatsappLink(message?: string) {
  const text = message ?? `Olá, ${site.name}! Gostaria de agendar um horário.`
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
}

export function formatPrice(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function img(file: string, width: number) {
  return `/.netlify/images?url=/img/${file}&w=${width}&fm=webp&q=75`
}
