/* Habilitando o modo estrito do JS */
'use strict';

/* Principais comando de 
repetição

-while      ENQUANTO
-do/while   FAÇA/ENQUANTO
-for        PARA

Obs.: normalmente os comandos
são controlados por meio de uma variável contadora.

Nomes comuns para esta variável:
i, j, k */

// Exemplo 1: while
/* let i = 1;
while( i <= 5 ){
    console.log(`Contador vale: ${i}`);
    i++;
} */

// let i = 5;
// while( i > 0){
//     console.log(`Contador vale: ${i}`);
//     i--;
// }



// Exemplo 2: do/while
/* Este loop SEMPRE FUNCIONARÁ
pelo menos 1x */
// let i = 100;
// do {
//     alert("Oláaaaaa");
//     i++; // incremento
// } while( i <= 3 );

// Exemplo 3: loop for

/* for( inicialização; condição; atualização  ) */
// for( let i = 1; i <= 5; i++ ){
//     console.log(`I vale ${i}`);
// }

/* Exemplo 4: loop com array */
let clientes = [
    "Sarah", "Antônio", "Théo", "Carlos"
];

// Cache da quantidade de clientes (guardando o tamanho do array)
// let quantidadeClientes = clientes.length; 

// for( let i = 0; i < quantidadeClientes; i++ ){
//     console.log(`Cliente: ${clientes[i]}`);
// }


/* Loops modernos e exclusivos do JS para Arrays e Objetos */

// Loop for/of: útil para arrays
let bandas = ["Savatage", "Slayer", "Nightwish"];

// for(let banda of bandas){
//     console.log(`Banda: ${banda}`);
// }

// Loop for/in: útil para objetos
let pessoa = {
    nome: "Fulano da Silva",
    idade: 25,
    cidade: "São Paulo"
}

// for(let dados in pessoa){
//     //console.log(dados);
//     console.log(pessoa[dados]);
// }

let pessoas = [
    {
        nome: "Phelipe",
        idade: 19
    },
    {
        nome: "Sarah",
        idade: 20
    },
    {
        nome: "Luis Carlos",
        idade: 45
    }
];

// for( let pessoa of pessoas ){
//     console.log(pessoa.nome);
//     console.log(pessoa.idade);
// }

/* Mini-exercícios
1) Crie um array contendo o nome dos 12 meses do ano */
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

/*2) Utilize um loop (qualquer um) para exibir os nomes de cada um no console. */

// SOLUÇÃO 1 usando for/of
let numero = 1;
for(let mes of meses){
    console.log(`${numero++} - ${mes}`);
    //numero++;
}

// SOLUÇÃO 2 usando for
// for(let i = 0; i < 12; i++){
//     console.log(`${i+1} - ${meses[i]}`);
// }

/* -DESAFIO: faça aparecer também junto com o nome,
o número do mês. Exemplo: 
1 - Janeiro 
2 - Fevereiro etc. */
























