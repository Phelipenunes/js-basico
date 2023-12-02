/* Se o salário for abaixo de 1500, o novo salário deve ter um aumento de 15%. Senão, se for igual ou menor que 3000, deve ter aumento de 10%.
Qualquer outra situação, o aumento será de 5%. */
let salario = 1800;
let novoSalario;
if( salario < 1500 ){
    novoSalario = salario * 1.15; 
} else if( salario <= 3000){
    novoSalario = salario * 1.10;
} else  {
    novoSalario = salario * 1.05;
}
console.log(salario);
console.log(novoSalario.toFixed(2)); // Fixar em 2 casas decimais

// Tratar/formatar como moeda em reais
console.log( 
    novoSalario.toLocaleString( "pt-br", {
        style: "currency",
        currency: "BRL"
    } ) 
);