//resultados Mega Sena anteriores = criar um banco de dados		
//Matriz contendo os números de 1 a 60, semelhante ao sorteiro original
let numeros = [];
let atual = 1;
while (atual <= 60){
    numeros.push(atual)
    atual++;
    console.log(numeros)
}

/* =============================================================== */

/*  1 - Gerando valores aleatórios e guardando nas variáveis
    2 - Retirando o número sorteado
    3 - Verificando a matriz no console */

//n1
var n1 = numeros[Math.floor(Math.random() * numeros.length)];
numeros.splice(numeros.indexOf(n1), 1);
console.log(numeros);

//n2
var n2 = numeros[Math.floor(Math.random() * numeros.length)];
numeros.splice(numeros.indexOf(n2), 1);
console.log(numeros);

//n3
var n3 = numeros[Math.floor(Math.random() * numeros.length)];
numeros.splice(numeros.indexOf(n3), 1);
console.log(numeros);

//n4
var n4 = numeros[Math.floor(Math.random() * numeros.length)];
numeros.splice(numeros.indexOf(n4), 1);
console.log(numeros, 1);

//n5
var n5 = numeros[Math.floor(Math.random() * numeros.length)];
numeros.splice(numeros.indexOf(n5), 1);
console.log(numeros);

//n6
var n6 = numeros[Math.floor(Math.random() * numeros.length)];
console.log(numeros);

// Retornando e ordenando os valores sorteados para a matriz numeros
numeros.push(n1, n2, n3, n4, n5);
numeros.sort((a, b) => a - b);
console.log(numeros);

/* ================================================================= */

/* Enviando os resultados para o DOM */

//n1
if(n1<10){
    document.getElementById("n1").innerHTML = '0'+ n1;
}

else{
    document.getElementById("n1").innerHTML = n1;
}

//n2
if(n2<10){
    document.getElementById("n2").innerHTML = '0'+ n2;
}
else{
    document.getElementById("n2").innerHTML = n2;
}

//n3
if(n3<10){
    document.getElementById("n3").innerHTML = '0'+ n3;
}
else{
    document.getElementById("n3").innerHTML = n3;
}

//n4
if(n4<10){
    document.getElementById("n4").innerHTML = '0'+ n4;
}
else{
    document.getElementById("n4").innerHTML = n4;
}

//n5
if(n5<10){
    document.getElementById("n5").innerHTML = '0'+ n5;
}
else{
    document.getElementById("n5").innerHTML = n5;
}

//n6
if(n6<10){
    document.getElementById("n6").innerHTML = '0'+ n6;
}
else{
    document.getElementById("n6").innerHTML = n6;
}

/* ================================================================= */

/* ================================================================= */
// funcionamento dos botões do header

btn1 = document.getElementById("btn1");
btn1.onclick = function(){
    tornarVisivel("comoFunciona");
}

btn2 = document.getElementById("btn2");
btn2.onclick = function(){
    tornarVisivel("contato");
}

function tornarVisivel (idElemento){
    var elemento = document.getElementById(idElemento);
   
    if(elemento.style.display == "block"){
        elemento.style.display = "none";
    }    
    else{
        elemento.style.display = "block";
    }
        
}


