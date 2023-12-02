// Exemplo 1: objeto simples/puro
let livro = {
    titulo: "Senhor dos Anéis",
    ano: 1954,
    volumes: 3,
    autor: "J.R.R. Tolkien"
};

// Meu livro preferido é: Senhor dos Anéis.
console.log("Meu livro preferido é: "+livro.titulo);
console.log(`Meu livro preferido é: ${livro.titulo}`);

console.log(livro.autor);
console.log(livro.ano);


// Exemplo 2: objeto contendo array e outro objeto
let cliente = {
    nome: "Frederico",
    apelido: "Kiko",
    idade: 22,
    telefones: ["11-2222-3333", "11-96666-5555"],
    medidas: {
        peso: 75,
        altura: 1.78
    }
};

console.log( cliente.nome );
console.log( cliente.idade + " anos.");

// Acessando uma propriedade que também é array
console.log( cliente.telefones[1] );

// Acessando uma propriedade que também é um objeto
console.log( cliente.medidas.altura );


// Exemplo 3: Array de Objetos
let livros = [
    {
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien"
    },
    {
        titulo: "Ghost Rider: a estrada da cura",
        autor: "Neil Peart"
    },
    {
        titulo: "Inside Out",
        autor: "Nick Mason"
    }
];

// Inside Out (escrito por Nick Mason) é uma biografia da
// banda Pink Floyd.
console.log(

`${livros[2].titulo} (escrito por ${livros[2].autor}) é
uma biografia da banda Pink Floyd`
);




