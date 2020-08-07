var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

/* ------------------------------------------------- */

// Operadores Aritmeticos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

/* ------------------------------------------------- */

// A ORDEM IMPORTA
// Começa por multiplicação e divisão, depois por soma e subtração.

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// Parênteses para priorizar uma expressão

/* ------------------------------------------------- */

// OPERADORES ARITMÉTICOS UNÁRIOS

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

// Mesma coisa para o decremento --x

/* ------------------------------------------------- */

// OPERADORES ARITMÉTICOS UNÁRIOS
// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

/* -------------------------------------------------- */

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(`O valor é: ${total}`);

// Crie duas expressões que retornem NaN
var expressao1 = 'Teste' / 2;
var expressao2 = 'Teste' * 2;
console.log(expressao1, expressao2);

// Somar a string '200' com o número 50 e retornar 250
var a = '200';
var b = 50;
var s = +a + b;
console.log(s)

// Incremente o número 5 e retorne o seu valor incrementado
s = s + 5;
console.log(`Incrementando 5 fica ${s}`)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = +numero / 2; // NaN (Not a Number)
console.log(`Peso dividido por 2 é: ${pesoPorDois}`);