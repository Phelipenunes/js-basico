/* Exemplo 01: manipulação do DOM 
$() significa "função jQuery" */

// Seleção de elementos
const titulo = $("h1");
const subtitulos = $("h2");

console.log(titulo);
console.log(subtitulos);

// Modificando elementos

// titulo.text("Bem-vindo jQuery!");
titulo.html("<i>Bem-vindo jQuery!</i>");

// Acessando determinados elementos selecionados
// Usamos eq(índice) para acessar o elemento
console.log( $(subtitulos).eq(0).text() );
console.log( $(subtitulos).eq(1).text() );

const sub1 = $(subtitulos).eq(0);
const sub2 = $(subtitulos).eq(1);

// Aplicando CSS inline
sub1.css("color", "red");
sub2.css("text-transform", "uppercase");

titulo.css({
    "color" : "purple",
    "text-align": "center",
    "font-family" : "Geneva"
});

// Aplicando classe a um elemento
const classicRock = $("h3");
classicRock.addClass("destaque");

/* ------ */

/* Exemplo 2: DOM e Evento */
const pagina = $("body");
const formulario = $("form");
const nome = $("#nome");
const tema = $("#tema");

// Manipular evento
formulario.on("submit", function(event){
    event.preventDefault();
    
    // Capturando os dados
    let usuario = nome.val();
    let cor = tema.val();

    // Obtendo o texto/nome da cor da opção selecionada
    let textoDaCor = tema.find("option:selected").text();

    // Aplicando a cor na página
    pagina.css("background-color", cor);

    // Personalizando o titulo
    titulo
        .hide()
        .html(`Olá <b>${usuario}</b>, você escolheu ${textoDaCor}`)
        // .fadeIn(6000)
        .slideDown(500)
});













