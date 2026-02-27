// 1-Criar um progama para exibir uma mensagem: "Olá, mundo."

console.log(`Olá mundo.`);

// 2-Criar um progama que mostre seu nome completo.

let nome = 'Felipe Hideki Tanji';
console.log(`Meu nome é ${nome}.`);

// 3-Criar um progama que mostre em número e exiba seu dobro.

let n1 = 9;
let dobro = n1*2;
console.log(`O número é ${n1} e o dobro é ${dobro}.`);

// 4-Criar um progama que mostre um número e exiba seu triplo.

let n2 = 7;
let triplo = n1*3;
console.log(`O número é ${n2} e o triplo é ${triplo}.`);

// 5-Criar um progama que mostre duas notas e calcule a média.

let nota1 = 10;
let nota2 = 8;
let media = (nota1+nota2)/2;
console.log(`A primeira nota é ${nota1} e a segunda é ${nota2}, a media entre eles é ${media}.`);

// 6-Criar um progama para converter metros em centímetros.

let n3 = 2;
let n4 = (n3*100);
console.log(`${n3} metros é igual a ${n4} centímetros.`); 

// 7-Criar um progama para mostrar o antecessor e o sucessor de um número.

let n5 = 10;
let n6 = (n5-1);
let n7 = (n5+1);
console.log(`O número antecessor de ${n5} é ${n6}, já o sucessor é ${n7}.`);

// 8-Criar um progama que mostre a área de um retângulo.

let base = 15
let altura = 10
let area = base*altura
console.log(`A área do retângulo é ${area}.`)

// 9-Criar um progama para calcular um aumento de 10% num salário de 2000,00.

let salario = 2000
let aumento = 2000*1.10
console.log(`O salário é de 2000 reais com o aumento ele vai passar a ser ${aumento}.`)

// 10-Criar um progama para saber se o número é par ou impar

let numero = 89;
if (numero % 2 === 0) {
    console.log('Número par!');
} else {
    console.log('Número impar!');
}