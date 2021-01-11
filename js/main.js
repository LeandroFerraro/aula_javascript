/*
var nome = "Leandro Ferraro";
var idade = "19";
var frase = "pastel é bom";
//alert(nome + " tem " + idade + " anos");
console.log(frase.replace("pastel", "bolo"));
*/

function botao(){
    alert("click");
    document.getElementById("obrigado").innerHTML = "obrigado por clicar";
}

function redirecionar(){
    window.open("https://www.redecanais.blog/filme/o-tempo-com-voce/");
}

var frutas = [{nome:"uva", cor:"roxo"}, {nome:"laranja", cor:"laranja"}]
var fruta = {nome:"maça", cor:"vermelho"};
var lista = ["231", "pera", "uva"];
//tira o ultimo elemento
lista.pop();
//coloca um elemento
lista.push("laranja");
console.log(lista[2]);
console.log(lista);
//inverte a lista
console.log(lista.reverse());
//imprime a quatidade de itens que tem na lista
console.log(lista.length);
//imprime a primeira letra do elemento
console.log(lista[0]);
console.log(lista.toString()[0]);
//transforma a lista em uma string e coloca algum acaractere a escolha entre aos elementos da lista
console.log(lista.join(" - "));

console.log(fruta);
console.log(fruta.nome);

console.log(frutas);
console.log(frutas[0].nome);

/////////////////////////////////////////////


//var idade = prompt("Qual seua idade?")
//if(idade >= 18){
//    console.log("maior de idade");
//}else{
//    console.log("menor de idade")
//}

var count = 0;
while(count < 5){
    console.log(count);
    count++;
};

var numero;
for(numero=0; numero <=5; numero++){
    console.log(numero);
}

var d = new Date();
//alert(d);

function soma(n1, n2){
    return n1 + n2;
}

