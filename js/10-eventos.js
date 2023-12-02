"use strict";

/* EXEMPLO 01 */

// Selecionando elementos
const exemplo01 = document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body"); // OU document.body

// Detectando um evento de clique
exemplo01.addEventListener("click", function(){
    // Mudando elementos no DOM
    mensagem01.innerHTML = "Beleza!";
    mensagem01.style.fontSize = "32px";
    pagina.style.fontFamily = "Verdana";

    // Removendo um elemento
    // exemplo01.remove();

    // Escondendo um elemento
    exemplo01.style.display = "none";
});

const titulo = document.querySelector("h1");
titulo.addEventListener("mouseover", function(){
    // Exibindo o elemento
    exemplo01.style.display = "block";
    mensagem01.textContent = "Oi sumido!";
});

/* EXEMPLO 02 */
const mensagem02 = document.querySelector("#mensagem02");

const janela = document.querySelector("#janela-modal");
const botaoFechar = document.querySelector("#janela-modal button");

// document.addEventListener("mouseout", function(event){
    /* É necessário verificar se a posição do
    mouse (no eixo vertical) está fora/acima da área do documento. Se estiver, aí mostramos/fazemos alguma ação. */
    // if(event.clientY < 0){
        // alert("Tá pensando mesmo em sair?");
        // mensagem02.innerHTML = "<i>Vai vazar mesmo?</i> 🤬";
        // mensagem02.style.background = "purple";
        // mensagem02.style.color = "white";
        // mensagem02.style.fontSize = "50px";
        
        // Executando/abrindo o <dialog>
        // janela.showModal();
//    }
// });

document.addEventListener("mouseout", verificaSaida);
function verificaSaida(event){
    if(event.clientY < 0){
        janela.showModal();

        // Desativando o monitor de evento/função
        document.removeEventListener("mouseout", verificaSaida);
    }
}

botaoFechar.addEventListener("click", function(){
    janela.close();
});


/* EXEMPLO 03 */
const botaoNoturno = document.querySelector("#noturno");

botaoNoturno.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");
    pagina.style.transition = "2s";

    /* EXERCÍCIO
    Se o modo noturno estiver "ativado", ou seja,
    se a classe "modo-noturno" ESTÁ aplicada na página */
    if( pagina.classList.contains("modo-noturno") ){
        // Então, mudamos o texto do botão para Desativar
        botaoNoturno.textContent = "Desativar";
    } else {
        // Senão, mantemos o texto como Ativar
        botaoNoturno.textContent = "Ativar";
    }
});