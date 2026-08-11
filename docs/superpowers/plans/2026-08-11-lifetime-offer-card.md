# Lifetime Offer Card Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the existing free-signup pricing card into a one-time R$ 27,90 lifetime-access offer while preserving its current styling.

**Architecture:** Keep the existing `Pricing` component and card DOM structure. Replace the local offer constants and visible copy, retain the current visual tokens/classes, and point the existing anchor CTA at the Cakto checkout.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS.

## Global Constraints

- Preserve fundo, borda, raio, sombra, tipografia, hover, espaçamento geral, divider e lista de recursos do card atual.
- Use the exact offer copy approved in the design spec.
- Do not add a new asset, dependency, state, or integration.

---

### Task 1: Update the pricing offer card

**Files:**
- Modify: `src/sections/Pricing.tsx`

**Interfaces:**
- Consumes: existing `Pricing` component and `FEATURES` list.
- Produces: rendered lifetime offer card with a working Cakto CTA.

- [ ] **Step 1: Replace the offer URL and visible copy**

Change the local URL constant to:

```ts
const CHECKOUT_URL = 'https://pay.cakto.com.br/kse9sb5'
```

Update the card content to:

```tsx
Acesso vitalício
Invista uma única vez e tenha acesso para sempre!
R$ 27,90
Acesso vitalício ao Zyra
Quero acesso vitalício
```

Keep the current anchor attributes, styling, arrow icon, and feature list structure unchanged. Correct the feature text to `Acesse de qualquer dispositivo`.

- [ ] **Step 2: Run static validation**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands exit successfully without TypeScript, JSX, or lint errors.

- [ ] **Step 3: Inspect the final diff**

Run:

```bash
git diff -- src/sections/Pricing.tsx
```

Confirm that only the offer content, URL, price presentation, and typo changed; current card styling and layout remain intact.

- [ ] **Step 4: Commit the implementation**

```bash
git add src/sections/Pricing.tsx
git commit -m "feat: update pricing card for lifetime access"
```
