'use strict';

/* Conceito sobre Funções 
Funções são blocos de código responsáveis
por executar determinadas tarefas. Para usar estes blocos/funções, é necessário "chamar/invocar" a função desejada.

Vantagens ao usar funções:

- Reutilização de código
- Organização de código, permitindo a separação de diferentes lógicas
- Perfomance melhor 

Desvantagens (no JS)
- Existem várias formas de fazer função
- Se a lógica for confusa, a função também será. */


/* Exemplos */

/* Sintaxe 1 (tradicional)
Função literal/anônima */
const exemplo1 = function(){
    console.log("Função literal/anônima");
};
exemplo1(); // Chamada


/* Sintaxe 2 (tradicional)
Função nomeada/declarada */
function exemplo2(){
    console.log("Função nomeada/declarada");
}

exemplo2(); // Chamada

/* Sintaxe 3 (moderna) 
Função flecha/seta (Arrow Function) */
const exemplo3 = () => {
    console.log("Arrow Function");
};

exemplo3(); // Chamada

/* Exemplo: função com parâmetros */

function soma( valor1, valor2 ) {
    /* Variável LOCAL: só existe DENTRO da função */
    let total = valor1 + valor2;

    /* Retornamos para FORA da função o que foi calculado */
    return total;
}

// console.log(total); // dá erro, pois total não existe aqui

// Chamamos a função e recebemos o que ela retorna
let resultado = soma(10, 5);

// agora dá certo, pois usamos o resultado RETORNADO pela função
console.log(resultado); 

let outroResultado = soma(150, 75);
let outraCoisa = soma(8, 25);

console.log(outroResultado);
console.log(outraCoisa);

console.log("-----------------");


// Versão 1
// function dobra(valor){
//     let valorDobrado = valor * 2;
//     return valorDobrado;
// }

// Versão 2 (Arrow Function)
// const dobra = (valor) => {
//     let valorDobrado =  valor * 2;
//     return valorDobrado;
// };

// Versão 3 (Arrow Function)
// const dobra = valor => {
//     return valor * 2;
// };

// Versão 4 (Arrow function com retorno implícito)
const dobra = valor => valor * 2;

let resultadoDobro = dobra(20);
console.log(resultadoDobro);


























