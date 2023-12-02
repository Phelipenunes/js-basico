let alunos = ["Antonio", "Aline", "Nicolas", "Thais"];

/* O acesso ao dados individuais do array, é feito
através do nome do array e do ÍNDICE correspondente
à posição do dado. Obs.: contagem SEMPRE inicia em zero. */
console.log(alunos[2]);
console.log(alunos[0]);

/* Mini-exercício 
- Crie um array com o nome de 5 artistas/bandas que você gosta.
- Em seguida mostre uma mensagem no console indicando o nome do artista que você mais gosta e do que menos gosta. */
let bandas = [
    "Rush", 
    "Slayer", 
    "Nightwish", 
    "Demônios da Garoa", 
    "Adele"
];
console.log(`Minha banda preferida é o ${bandas[0]}, mas também gosto de ${bandas[4]}.`);

// Matrizes (arrays com 2 ou mais dimensões)
let linguagens = [ 
    // 0      1     2  
    ["HTML", "CSS", "JS"],                  // 0
    ["PHP", "ASP.Net", "Java", "Python"]    // 1
];

console.log(linguagens[0][1]+ " é para estilos.");
console.log(linguagens[1][0]+ " é back-end.");









