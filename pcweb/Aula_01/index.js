/* var num1 = 2;
console.log(num1);

num1 += 1;
console.log(num1);

num1 -= 2;
console.log(num1); 

var str1 = "2";

console.log('Comparando os valores');
console.log((0 == false));

num1 === str1 ? console.log("Deu verdadeiro"):console.log("Deu falso");

if(num1 === str1) {
console.log('Deu verdadeiro');
}
else {
    console.log('Deu falso');
}

console.log(typeof(num1)); */

var teste1 = 'Olá, mundo';

function mensageiro (msg) {
    var teste2 = 'Variável léxica';
    console.log(teste2);
    console.log(msg);
    return 1;
}

console.log(teste2);
mensageiro('Testando parâmetro da função');