import fs from 'node:fs';
import pc from 'picocolors';

const texto = fs.readFileSync('src/data/conta.json', 'utf-8');
const conta = JSON.parse(texto);
console.log (pc.blue('Racha-conta:'), conta.restaurante);
console.log (pc.blue('pessoas na mesa:'), conta.pessoas);
console.log (pc.blue('itens na conta:'), conta.itens.length);
console.log (pc.blue('gorjeta:'), conta.gorjeta);
console.table(conta.itens);

const subtotal = conta.itens.reduce((total, item) => total + item.preco * item.quantidade, 0 );
console.log (pc.blue('subtotal: $'), subtotal.toFixed(2) );
const total = conta.itens.reduce ((total, item, gorjeta) => total + item.preco + item.quantidade * conta.gorjeta, 0 );
console.log (pc.blue('total com gorjeta: $'), total.toFixed(2));
const unidades_pedidas = conta.itens.reduce ((total, item) => total + item.quantidade, 0 );

console.log (pc.blue('unidades pedidas:'), unidades_pedidas);
const alimentos = conta.itens.filter (item => item.preco > 50);

console.log (pc.blue('itens acima de $50:'), alimentos.length);

