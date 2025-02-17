//Exercicio 1

const dobro = num => num *2;

console.log(dobro(7)); // 14
console.log(dobro(15)); // 30

//Exercicio 2

const dividir = (a, b) => a / b;

console.log(dividir(10, 2)); // 5
console.log(dividir(9, 3));  // 3

//Exercicio 3

const mensagemBoasVindas = nome => "Seja bem-vindo, "+nome+"!";

console.log(mensagemBoasVindas("Carlos")); // "Seja bem-vindo, Carlos!"
console.log(mensagemBoasVindas("Ana"));    // "Seja bem-vindo, Ana!"

//Exercicio 4

const executarOperacao = (a, b, operacao) => operacao(a, b);

console.log(executarOperacao(6, 3, (a, b) => a - b)); // 3
console.log(executarOperacao(4, 5, (a, b) => a * b)); // 20

//Exercicio 5

const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(preco => preco * 0.9);

console.log(precosComDesconto); // [90, 180, 270, 360]

//Exercicio 6

const idades = [12, 25, 17, 30, 14, 19];
const menoresDeIdade = idades.filter(idade => idade < 18);

console.log(menoresDeIdade); // [12, 17, 14]

//Exercicio 7

const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((acc, num) => acc * num, 1);

console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)