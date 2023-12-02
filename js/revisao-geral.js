console.log("Revisão!");

/* O que estudamos até o momento?
-Sintaxe
-Variáveis, constantes e tipos de dados (texto, números)
-Formas de saída (concatenação e template literal/string)
-Janelas
-Array e -Objeto */

// Variável
let clube = "Corinthians";

// Constante (valor fixo)
const estado = "SP";

// Saída de dados para testes
console.log(clube);
console.log(estado);

// Concatenação
console.log("O "+clube+" é do estado de "+estado);

// Template String/Literal (moderna)
console.log(`O ${clube} é do estado de ${estado}`);

// Janela de diálogo
//let nome = prompt("Qual seu nome?");
//console.log("Bem-vindo(a) "+nome);

// Arrays (listas de dados INDEXADOS)
let comidas = ["Paçoca", "Brigadeiro", "Pizza"];

console.log(`Adoro ${comidas[0]} e ${comidas[2]}!`);

// Objeto (listas de dados NÃO INDEXADOS)
// Os dados são formados por propriedades com nome/valor
let aluno = {
    nome: "Fulano",
    sobrenome: "da Silva",
    idade: 18
};

console.log(`${aluno.nome} tem ${aluno.idade} anos.`);





