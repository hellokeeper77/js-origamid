var nome = 'Rodrigo';
var idade = 39;
var possuiFaculdade = false;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = preco * totalComprado;

console.log('O valor total é: ' + totalPreco);


// Variavel sem valor = UNDEFINED

var semDefinir;
console.log(semDefinir);

/**
 * HOISTING
 * 
 * Todas as variáveis são movidas para o topo do código, porém o valor só é atribuido no exato local onde isso acontece.
 * 
 * Exemplo:
 */

console.log(hoistin); // retorna undefined
var hoistin = 'Isso é um teste';
console.log(hoistin); // retorna o valor atribuido

// EXERCICIO

// Declarar uma variável com o seu nome
var nome2 = 'Rodrigo Bastos da Silva';

// Declarar uma variável com a sua idade
var idade2 = 39;

// Declarar uma variável com a sua comida favorita e não atribuir valor
var comidaFavorita;

// Atribuir valor a sua comida favorita
comidaFavorita = 'Churrasco';

// Declarar 5 variáveis diferentes sem valores
var time;
var banda;
var instrumentoMusical;
var notebook;
var carro;


console.log(`Resultado do exercício: ${nome2}, ${idade2}, ${comidaFavorita}, ${time}, ${banda}, ${instrumentoMusical}, ${notebook}, ${carro}`)