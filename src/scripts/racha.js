import fs from 'node:fs';
import pc from 'picocolors';
import { paraCentavos } from '../regras/conta.js';
import { calcularGorjeta } from '../regras/conta.js';
import { formatarReais } from '../regras/conta.js';

const texto = fs.readFileSync('src/data/conta.json', 'utf-8');
const conta = JSON.parse(texto);

console.log(pc.blue('Racha-conta:'), conta.restaurante);
console.log(pc.blue('pessoas na mesa:'), conta.pessoas);
console.log(pc.blue('itens na conta:'), conta.itens.length);
console.log(pc.blue('gorjeta:'), conta.gorjeta);
console.table(conta.itens);

const subtotal = conta.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
const unidades_pedidas = conta.itens.reduce((total, item) => total + item.quantidade, 0);
const caros = conta.itens.filter(item => item.preco > 50);

const contapessoas = (conta.pessoas);
const subtotalCentavos = paraCentavos(subtotal);
const totalcentavos = (calcularGorjeta(subtotalCentavos, conta.gorjeta) + subtotalCentavos);

const TotalPessoas = subtotal / contapessoas;
const gorjetaCentavos = calcularGorjeta (subtotalCentavos, conta.gorjeta);
const centavossobra = (totalcentavos % contapessoas); 

console.log (`unidades pedidas: ${unidades_pedidas}`);
console.log (`itens acima de $50: ${caros.length}`);
console.log (`Subtotal: R$ ${(subtotal)}`);
console.log (`Gorjeta (10%): R$ ${gorjetaCentavos / 100 }`);
console.log (`Total: ${(formatarReais (totalcentavos))}`)
console.log (`Total por pessoas: R$ ${TotalPessoas.toFixed(2)}`);
console.log (`Centavos que sobram: ${centavossobra}`)
