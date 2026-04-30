# Zyra — Landing Page

> **Este projeto não está disponível para replicação.** Este repositório serve como documentação das decisões de engenharia, arquitetura e estratégia de conversão por trás da construção do Zyra.

---

## O Produto

O **Zyra** é um sistema de organização pessoal desenhado especificamente para mulheres que buscam sair do "modo automático" e retomar o controle de suas rotinas. Ele substitui a fragmentação de múltiplas ferramentas (notas, planilhas, planners físicos) por um ecossistema centralizado que abrange mais de 16 áreas da vida — de finanças e carreira a bem-estar e espiritualidade.

A proposta de valor foca na redução da carga mental. Enquanto ferramentas tradicionais focam apenas em "o que fazer", o Zyra organiza o "como viver", permitindo uma visão clara de progresso em cada pilar fundamental da experiência feminina moderna.

### Validação e Evolução

Diferente de produtos puramente digitais, o Zyra nasceu de uma necessidade real de organização sistêmica. O desenvolvimento da landing page seguiu padrões de design que priorizam a sofisticação e a clareza, utilizando uma tipografia que alterna entre a autoridade do clássico (EB Garamond) e a modernidade funcional (Figtree), espelhando o equilíbrio que o produto propõe às suas usuárias.

---

## Arquitetura Técnica

O ecossistema Zyra é estruturado para garantir escalabilidade e performance:

```
Landing Page (este repositório) → Funil de conversão e storytelling
Zyra Members (Dashboard)      → Área de membros e entrega de ferramentas
```

### Landing Page (este repositório)

| Camada      | Tecnologia               |
| ----------- | ------------------------ |
| Framework   | React 19 + Vite 8        |
| Linguagem   | TypeScript 6             |
| Estilo      | Tailwind CSS v4          |
| Ícones      | Phosphor Icons           |
| Tipografia  | EB Garamond & Figtree    |
| Deploy      | Netlify                  |
| Performance | Vite Bundle Optimization |

A escolha de manter a Landing Page em um repositório isolado permite uma iteração rápida no funil de vendas e testes A/B sem interferir na estabilidade da aplicação principal (Dashboard). O uso do **Tailwind v4** garante uma compilação extremamente rápida e um CSS final otimizado.

### Ecossistema de Membros

- **Dashboard Integrado**: Focado em usabilidade e redução de ruído visual.
- **Backend-as-a-Service**: Utilização de automações para processamento de webhooks e integração com sistemas de pagamento.
- **Static Delivery**: Conteúdo de guias e manuais servidos de forma estática para garantir carregamento instantâneo em qualquer dispositivo.

---

## Estratégia de Conversão

A estrutura da página não é apenas estética; ela segue uma narrativa psicológica de conversão baseada no framework AIDA:

1.  **Consciência (Hero)**: Confronto direto com o "viver no automático" e a promessa de transformação.
2.  **Educação (Areas & Features)**: Demonstração visual das 16+ áreas, provando a amplitude do sistema.
3.  **Comparação (Comparison)**: Visualização clara do gap entre a gestão manual/caótica e o "Zyra".
4.  **Prova Social (Testimonials)**: Validação por meio de experiências reais de outras mulheres.
5.  **Ação (Pricing)**: Oferta estruturada com ancoragem de valor e CTAs claros para o checkout.

Todos os elementos interativos e animações (via CSS nativo e otimizações de runtime) foram desenhados para reforçar a sensação de calma e organização que o produto promete.

---

## Desafio Técnico: Estética Premium vs. Performance Mobile

O principal desafio deste projeto foi conciliar uma identidade visual rica — que utiliza fontes serifadas pesadas e layouts assimétricos — com a necessidade de um _Time to Interactive_ (TTI) baixo, especialmente em conexões móveis.

A solução envolveu:

- **Zero Frameworks de Animação Pesados**: Utilização estratégica de transições CSS e a engine do Tailwind v4 para micro-interações.
- **Font Optimization**: Carregamento seletivo de pesos de fonte e priorização via _Critical CSS_.
- **Asset Management**: Uso de formatos modernos (WebP/SVG) e _lazy-loading_ agressivo em seções abaixo da dobra.

---

Para questões técnicas ou colaboração profissional: [linkedin.com/in/ramon-sousa-pereira/](https://www.linkedin.com/in/ramon-sousa-pereira/)
