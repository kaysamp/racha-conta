# Racha Conta

## Como funciona?

- Divide a conta do restaurante entre as pessoas da mesa, sem perder nenhum centavo.

# Como rodar?
- Copie e cole em seu terminal:
```bash
npm install
npm run racha
```
## O que ele deve mostrar:

```
pessoas na mesa: 4
itens na conta: 4
gorjeta: 10
┌─────────┬───────────────────────────┬────────────┬───────┐
│ (index) │ descricao                 │ quantidade │ preco │
├─────────┼───────────────────────────┼────────────┼───────┤
│ 0       │ 'Pizza grande marguerita' │ 1          │ 72.9  │
│ 1       │ 'Pizza grande calabresa'  │ 1          │ 68.9  │
│ 2       │ 'Refrigerante 2 litros'   │ 2          │ 14.5  │
│ 3       │ 'Petit gâteau'            │ 1          │ 16.7  │
└─────────┴───────────────────────────┴────────────┴───────┘
subtotal: $ 187.50
total com gorjeta: $ 223.00
unidades pedidas: 5
itens acima de $50: 2
```