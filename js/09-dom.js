"use strict";

/* Funções/Métodos de seleção de elementos no DOM

- getElementById()
Seleciona UM elemento através do ID.

- querySelector()
Seleciona UM elemento através de SELETORES (mesma lógica do CSS)

- querySelectorAll()
Seleciona VÁRIOS elementos através de SELETORES (mesma lógica do CSS) */


/* Exemplos de seleção no DOM */

// Exemplo 1: getElementById
const legenda = document.getElementById("legenda");
console.log(legenda);

// Exemplo 2: querySelector()
const titulo = document.querySelector("h1");
const sobreFront = document.querySelector("#sobre");

console.log(titulo);
console.log(sobreFront);

/* Mini-exercícios */
const backEnd = document.querySelector(".back-end");
console.log(backEnd);

const tituloEditores = document.querySelector(".editores h2");
console.log(tituloEditores);



// Exemplo 3: querySelectorAll()
/* Obs.: o retorno desta função é como um ARRAY */
const subtitulos = document.querySelectorAll("h2");
console.log(subtitulos);
console.log(subtitulos[1]);

const varios = document.querySelectorAll("p, a");
console.log(varios);



/* Modificando elementos no DOM
(Conteúdo, mudança de tag, cores, criação de elementos) */

// Alterando o conteúdo (APENAS texto)
legenda.textContent = "DOM - Hierarquia Geral";

// Alterando com suporte à HTML
sobreFront.innerHTML = "<i>Front-End</i>";

// CSS INLINE via JavaScript
backEnd.style.color = "red";
backEnd.style.textAlign = "center";

// CSS usando classes via JavaScript
titulo.classList.add("destaque");


let listaDeEditores = [
    "VSCode", 
    "Notepad++",
    "Sublime Text",
    "Atom",
    "Dreamweaver",
    "Android Studio"
];

// Selecionando a lista vazia através da classe
const lista = document.querySelector(".lista");
console.log(lista);

// Percorrer o array usando o loop for/of
for(let programa of listaDeEditores){
    
    // 1) Criar um novo elemento <li>
    let item = document.createElement("li");

    // 2) Adicionar conteúdo ao novo elemento
    item.innerHTML = programa;

    // 3) Adicionar à lista
    lista.appendChild(item);
}

/* Adicinando atributo à diversos elementos */
const linksReferencias = document.querySelectorAll(".referencias li a");
console.log(linksReferencias);

for(let link of linksReferencias){
    // "setando/colocando" o atributo "target" com o valor "_blank"
    link.setAttribute("target", "_blank");
}
