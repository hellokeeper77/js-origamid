// BOOLEAN
// Existem dois valores booleanos false ou true.

var possuiGraduacao = true;
var possuiDoutorado = false;

// CONDICIONAIS IF E ELSE
// Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.

if (possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else
// O valor dentro dos parênteses sempre será avaliado em false ou true.

var nome;

if (nome) {
  console.log(nome)
} else {
  console.log('Nome não existe')
}


/* ------------------------------------------------------------------------------------------- */



// TRUTHY E FALSY
// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// Falsy
if (false)
  if (0) // ou -0
    if (NaN)
      if (null)
        if (undefined)
          if ('') { }// ou "" ou ``

// Todo o resto é truthy
// Truthy
if (true)
  if (1)
    if (' ')
      if ('andre')
        if (-5)
          if ({});

// OPERADOR LÓGICO DE NEGAÇÃO !
// O operador !, nega uma operação booleana. Ou seja, !true é igual a false

// Truthy
if (!true) // false
  if (!1) // false
    if (!'') // true
      if (!undefined) // true
        if (!!' ') // true
          if (!!''); // false

// Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy


/* ------------------------------------------------------------------------------------------- */



// OPERADORES DE COMPARAÇÃO
// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true


/* ------------------------------------------------------------------------------------------- */


// OPERADORES LÓGICOS &&
// && Compara se uma expressão e a outra é verdadeira

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

// Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos


/* ------------------------------------------------------------------------------------------- */

// OPERADORES LÓGICOS ||
// || Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

// etorna o primeiro valor true que encontrar

/* ------------------------------------------------------------------------------------------- */

//EXERCICIOS

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 39;
var thaisIdade = 40;

if (minhaIdade > thaisIdade) {
  console.log(`Minha idade é maior que a da Thais`)
} else if (minhaIdade === thaisIdade) {
  console.log(`Nossas idades são iguais`)
} else {
  console.log(`Minha idade é menor que a da Thais`)
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log(`Brasil tem mais habitantes`)
} else {
  console.log(`China tem mais habitantes`)
}

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}