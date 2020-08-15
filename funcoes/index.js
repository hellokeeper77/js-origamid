// FUNÇÕES
// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4)) // 16
console.log(areaQuadrado(5)) // 25
console.log(areaQuadrado(2)) // 4

// --------------------------------------------

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

// Parênteses () executam uma função

// --------------------------------------------

// PARÂMETROS E ARGUMENTOS
// Ao criar uma função, você pode definir parâmetros.

// Ao executar uma função, você pode passar argumentos.

// Ao executar uma função, você pode passar argumentos.

function imc(peso, altura) {
  const imc = peso / (altura * altura)
  return imc;
}
console.log(imc(95, 1.75));

// Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também

// --------------------------------------------

// PARÊNTESES EXECUTA A FUNÇÃO

function corFavorita(cor) {
  if (cor === 'Azul') {
    return 'Eu gosto de azul'
  } else if (cor === 'Verde') {
    return 'Palmeiras não tem mundial'
  } else {
    return 'Cor inválida'
  }
}
console.log(corFavorita('Azul'));
console.log(corFavorita('Verde'));
console.log(corFavorita());

// --------------------------------------------

// ARGUMENTOS PODEM SER FUNÇÕES
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

addEventListener('click', function () {
  console.log('Clicou')
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo uma função anonima

// Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

// --------------------------------------------

// PODE OU NÃO RETORNAR UM VALOR
// Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc2(peso, altura) {
  const imc2 = peso / (altura ** 2);
  console.log(imc2);
}

imc2(85, 1.75); // retorna o imc
console.log(imc2(80, 1.80)); // retorna o imc e undefined

// VALORES RETORNADOS
// Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade('Oi'))

// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.

// --------------------------------------------

// ESCOPO
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
console.log(precisoVisitar(50));
console.log(totalPaises); // erro, totalPaises não definido


// ESCOPO LÉXICO
// Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro pq a função está dentro do escopo da função dados

// HOISTING
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}
