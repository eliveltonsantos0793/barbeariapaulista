# Dom Navalha — guia para agentes

Site de página única para uma barbearia, em português (pt-BR). **Requisito do cliente: sem formulários e sem banco de dados.** Toda chamada para contato ou serviço deve abrir o WhatsApp via `whatsappLink()`; não adicione Netlify Forms, banco de dados ou funções para contato.

## Estrutura

- `src/data/site.ts` — fonte única de conteúdo: dados da barbearia (número do WhatsApp, endereço, horários), serviços, depoimentos e helpers (`whatsappLink`, `formatPrice`, `img`).
- `src/routes/index.tsx` — a página inteira, dividida em componentes de seção (Header, Hero, Services, House, Testimonials, Visit, Footer, FloatingWhats). `WhatsButton` é o botão padrão para qualquer CTA.
- `src/routes/__root.tsx` — metadados (título/descrição em pt-BR) e Google Fonts (DM Serif Display + Manrope).
- `src/styles.css` — tokens do tema Tailwind (`ink`, `moss`, `brass`, `cream`, `whats`), textura `grain`, animação da faixa de barbeiro `.pole` e `.rise`.
- `public/img/` — fotos geradas para o site; sempre referencie via `img(file, width)` (Netlify Image CDN, webp), nunca o PNG original.

## Convenções

- Mensagens do WhatsApp são pré-preenchidas com o serviço e o preço; mantenha esse padrão ao criar novos CTAs.
- O "pacote" de serviços é apenas estado local (React) que gera o texto da mensagem — não é persistido.
- O número em `site.whatsapp` é um placeholder até o dono informar o real.

## Desenvolvimento

`netlify dev` para rodar localmente; o build (`vite build`, publica `dist/client`) roda na Netlify. `src/routeTree.gen.ts` é gerado automaticamente.
