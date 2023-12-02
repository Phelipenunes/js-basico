'use strict';

const pagina = document.querySelector("body");
const formulario = document.querySelector("form");
const campoPalpite = document.querySelector("#palpite");
const resultado = document.querySelector("#resultado");

// Crie uma constante para o elemento de imagem
const imagem = document.querySelector("#imagem");

// Variáveis para os arquivos de imagem
let faustao = "faustao.gif";
let miseravi = "miseravi.gif";

/* Gerar valores aleatórios 
Usamos Math.random() * 11 para gerar valores
entre 0 e 10, e passamos o valor para o parseInt
para descartar a parte "quebrada" do número, mantendo
apenas o valor inteiro. */
let numeroAleatorio = parseInt(Math.random() * 10);
console.log(numeroAleatorio);

/* Detectando o acionamento do formulário
para capturar e analisar o palpite */
formulario.addEventListener("submit", function(event){
    // Anulando o comportamento padrão do evento
    event.preventDefault();

    // Capturando o palpite (valor do campo)
    let palpite = parseInt(campoPalpite.value);
    console.log(palpite);

    // Comparando o palpite com o numero aleatorio do computador
    if( palpite === numeroAleatorio ){
        resultado.textContent = "Acertou miserávi! 🤩";
        resultado.style.color = "blue";
        pagina.style.background = "lightblue";
        
        // Solução 1
        // imagem.setAttribute("src", miseravi);
        
        // Solução 2
        imagem.src = miseravi;
        
        // Redirecionamento usando "location"
        // location = "http://www.sp.senac.br";
        
        resultado.style.animation = "tada 3s infinite";
    } else {
        resultado.style.animation = "shakeX 3s infinite";

        resultado.textContent = "Errrouuu!!! 😭";
        resultado.style.color = "red";
        pagina.style.background = "salmon";
        imagem.src = faustao;

        // location = "https://www.rihappy.com.br/barbie";
    }
});

