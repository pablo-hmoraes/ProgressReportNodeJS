/*
Exemplo de como podemos solicitar e utilizar um core module 
*/
let fs = require('fs'); 

let texto = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(texto);

let textoFinal = `Texto que será escrito: ${texto}`;
fs.writeFileSync('./txt/output.txt', textoFinal);

let textoOutput = fs.readFileSync('./txt/output.txt', 'utf-8');
console.log(textoOutput);


/*
Exemplo de como podemos solicitar e utilizar um local module 
*/

let maior = require('./modules/maior');
let calc = require('./modules/calc')

let a = 4, b = 8;
console.log(`O maior número é ${maior(a, b)}`);

console.log(`A + B = ${calc.soma(a, b)}`);
console.log(`A - B = ${calc.subtracao(a, b)}`);
console.log(`A * B = ${calc.multiplicao(a, b)}`);


