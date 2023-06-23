//resultados Mega Sena anteriores = criar um banco de dados
//Matriz contendo os números de 1 a 60, semelhante ao sorteiro original
let numeros = [];
let atual = 1;
while (atual <= 60) {
  numeros.push(atual);
  atual++;
}

/* =============================================================== */

/*  1 - Gerando valores aleatórios e guardando nas variáveis
    2 - Retirando o número sorteado
    3 - Verificando a matriz no console 
*/
let numerosEscolhidos = [];
for (let i = 0; i < 6; i++) {
  let n1 = numeros[Math.floor(Math.random() * numeros.length)];
  numeros.splice(numeros.indexOf(n1), 1);
  numerosEscolhidos.push(n1);
}

/* ================================================================= */

/* Enviando os resultados para o DOM */

for (let i = 0; i < 6; i++) {
  let numero = numerosEscolhidos[i];
  if (numero < 10) {
    document.getElementById("n" + (i + 1)).innerHTML = "0" + numero;
  } else {
    document.getElementById("n" + (i + 1)).innerHTML = numero;
  }
}

/* ================================================================= */

/* ================================================================= */
// funcionamento dos botões do header

btn1 = document.getElementById("btn1");
btn1.onclick = function () {
  tornarVisivel("comoFunciona");
};

btn2 = document.getElementById("btn2");
btn2.onclick = function () {
  tornarVisivel("contato");
};

function tornarVisivel(idElemento) {
  var elemento = document.getElementById(idElemento);

  if (elemento.style.display == "block") {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "block";
  }
}
