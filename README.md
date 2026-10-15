# Dom Navalha — site da barbearia

Site de página única para uma barbearia clássica. Não há formulários nem banco de dados: todo pedido de contato ou agendamento abre uma conversa no WhatsApp com a mensagem já preenchida.

## O que tem no site

- **Hero** com chamada direta para agendar no WhatsApp
- **Cardápio de serviços** com preço e duração; cada serviço tem seu botão "Agendar", e o botão **+** monta um pacote com vários serviços, enviado de uma vez com o total
- **A casa**: fotos do ambiente e diferenciais
- **Depoimentos** de clientes
- **Visite**: horários, endereço (link para o Google Maps) e número do WhatsApp
- Botão flutuante do WhatsApp em todas as telas

## Personalização

Tudo fica em `src/data/site.ts`: nome, **número do WhatsApp** (somente dígitos, com código do país e DDD, ex. `5511987654321`), endereço, horários, Instagram, serviços, preços e depoimentos.

As fotos ficam em `public/img/` e são servidas otimizadas pelo Netlify Image CDN.

## Tecnologias

TanStack Start (React 19), Tailwind CSS 4, lucide-react e deploy na Netlify.

## Rodando localmente

```bash
pnpm install
netlify dev
```
