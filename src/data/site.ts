// Todas as informações da barbearia ficam aqui. Troque o número do WhatsApp,
// endereço, horários e serviços neste arquivo — o site inteiro se atualiza.

export const site = {
  name: ' Barbearia Paulista',
  tagline: 'Barbearia ',
  // Somente dígitos: código do país + DDD + número (ex.: 5511987654321)
  whatsapp: '5548999985115',
  whatsappDisplay: '(48) 99998-5115',
  instagram: '@will_bertoldo',
  address: 'Avenida Bayer Filho, 998 — Centro - Tijucas/SC',
  mapsUrl: 'https://maps.app.goo.gl/E7zQAMZgfCmLQ1QC6',
  hours: [
    { days: 'Terça a sábado', time: '9h às 20h' },
    { days: 'Segunda', time: '14h às 20h' },
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
