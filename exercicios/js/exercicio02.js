/* Crie um objeto chamado "pedido" contendo as seguintes informações: Código, data, produtos (lista com 3 produtos), preço do pedido e prazo de entrega */
let pedido = {
    codigo: "123abc",
    data: "23/09/2023",
    produtos: ["TV", "Notebook", "Geladeira"],
    preco: 1500.45,
    prazo: 7
};

/* Mostre no console alguns dados do pedido, como por exemplo o código, os produtos e o preço do pedido */
console.log(`Código do pedido: ${pedido.codigo}`);
console.log(`Produto 1: ${pedido.produtos[0]}`);
console.log(`Produto 2: ${pedido.produtos[1]}`);
console.log(`Produto 3: ${pedido.produtos[2]}`);
console.log(`Preço do pedido: ${pedido.preco}`);

console.log(`Preço do pedido: ${pedido.preco}`);

console.log(pedido.preco); // original, puro

/* DESAFIO! */
let precoFormatado = pedido.preco.toLocaleString(
    "pt-br", {
        style: "currency",
        currency: "BRL"
    }
);
console.log(precoFormatado);
console.log(`Preço do pedido: ${precoFormatado}`);
console.log(`Preço do pedido: ${pedido.preco.toLocaleString(
    "pt-br", {
        style: "currency",
        currency: "BRL"
    }
)}`);




