// Comentário de uma linha. Dica: atalho CTRL ;

/* comentário de bloco,
de várias linhas. Dica: atalho SHIFT ALT A */

// Dica: atalho log e enter
console.log("Exemplo Sintaxe Geral");

/* Variáveis e Constantes
São espaços na memória RAM para 
armazenamento de dados. */

// Variáveis (valor pode mudar)
var aluno = "Tiago";  // método antigo
let produto = "Monitor LG"; // método novo

// Constantes (um valor fixo, que não muda)
const escola = "Senac";

// Saída/Exibição de dados da memória
console.log(aluno);
console.log(produto);
console.log(escola);

console.log(aluno, escola, produto);

// Somente declaração
let servico, prestador, unidade;

// Atribuição
servico = "Manutenção";
prestador = "Seu Madruga";
unidade = "Vila do Chaves";

console.log(prestador, servico);

/* Dados numéricos */
let ano = 2023; // inteiro
let preco = 1950.42; // decimal

/* Valores "quebrados" a casa decimal
é feita com . (ponto) e não vírgula. */

/* Nomes compostos para variáveis */
// let curso de tecnologia; // ERRADO!
//let curso-de-tecnologia; // ERRADO!
let cursodetecnologia; // certo
let curso_de_tecnologia; // certo
let cursoDeTecnologia; // certo (MAIS USADO)

/* Operadores matemáticos */
//      + ADIÇÃO
//      - SUBTRAÇÃO
//      / DIVISÃO
//      * MULTIPLICAÇÃO
let valor1 = 10;
let valor2 = 5;

/* Operações */
let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor1 / valor2;

/* Saída de dados elaborada */

// CONCATENAÇÃO (utiliza o operador + para juntar dados)
console.log("Olá "+aluno+", bem-vindo ao "+escola+"!");

// TEMPLATE LITERAL/STRING (utiliza crases ``)
console.log(`Olá ${aluno}, bem-vindo ao ${escola}!`);

/* Sobre aspas (simples '' ou duplas "")
Aspas são usadas para textos/strings */
let estiloMusical_1 = "Rock 'n' Roll";
// let estiloMusical_2 = 'Rock 'n' Roll'; // ERRADO!
let estiloMusical_3 = 'Rock "n" Roll'; // CERTO!
let estiloMusical_4 = 'Rock \'n\' Roll'; // CERTO!

/* A barra invertida significa "ESCAPE", ou seja,
indicamos pro JS que aquele caractere com a barra
deve ser entendido apenas como um texto qualquer,
sem interferência com a linguagem de programação. */


/* Revisão sobre variáveis e constantes 
let     VARIÁVEL
const   CONSTANTE */
let teste = 10;
// const teste = 10;
console.log(teste);

// Sendo let, tudo bem mudar!
// Sendo const, vai dar ruim!
teste = 20;
console.log(teste);

// const obriga a criação e atribuição.
// Portanto, a linha abaixo dá erro:
/* const x, y;
x = 10;
y = 5; */