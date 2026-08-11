# Design: Card de oferta com acesso vitalício

## Objetivo

Atualizar o card atualmente intitulado “Crie sua conta grátis” na seção de pricing para comunicar uma compra única de acesso vitalício ao Zyra, preservando a estilização visual existente.

## Escopo

- Alterar o badge para “Acesso vitalício”.
- Usar o título “Invista uma única vez e tenha acesso para sempre!”.
- Exibir o preço único “R$ 27,90”.
- Exibir o apoio “Acesso vitalício ao Zyra”.
- Alterar o CTA para “Quero acesso vitalício”.
- Fazer o CTA apontar para `https://pay.cakto.com.br/kse9sb5` em nova aba.
- Preservar fundo, borda, raio, sombra, tipografia, hover, espaçamento geral, divider e lista de recursos do card atual.
- Corrigir “quaquer” para “qualquer” na lista de recursos.

## Abordagens consideradas

1. Atualizar somente conteúdo e link dentro do card atual — escolhida por cumprir o pedido com o menor impacto visual.
2. Adicionar a montagem visual da referência como novo asset — descartada por aumentar a altura e alterar a composição do card.
3. Criar uma faixa compacta de preço — descartada por modificar mais profundamente a hierarquia existente.

## Estrutura e comportamento

O componente `Pricing` continuará sendo responsável por uma única oferta. O conteúdo comercial será definido por constantes locais simples. O link será um elemento `<a>` com `target="_blank"` e `rel="noopener noreferrer"`. Não haverá estado novo, integração adicional ou alteração nas demais seções.

## Verificação

- Executar lint/build disponíveis no projeto.
- Conferir visualmente o card em viewport desktop e mobile.
- Confirmar o texto, preço e URL do CTA no código/renderização.
- Confirmar que a lista de recursos permanece visível e sem overflow.
