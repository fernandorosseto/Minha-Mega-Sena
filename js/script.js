//resultados Mega Sena anteriores = api

/* =============================================================== */

/*  1 - Gerando valores aleatórios e guardando nas variáveis
    2 - Retirando o número sorteado
    3 - Verificando a matriz no console 
*/

function randomNumbers() {
	//Matriz contendo os números de 1 a 60, semelhante ao sorteiro original
	let numeros = [];
	let atual = 1;
	while (atual <= 60) {
		numeros.push(atual);
		atual++;
	}

	let numerosEscolhidos = [];
	for (let i = 0; i < 6; i++) {
		let n1 = numeros[Math.floor(Math.random() * numeros.length)];
		numeros.splice(numeros.indexOf(n1), 1);
		numerosEscolhidos.push(n1);
	}

	/* Enviando os resultados para o DOM */
	for (let i = 0; i < 6; i++) {
		let numero = numerosEscolhidos[i];
		if (numero < 10) {
			document.getElementById("n" + (i + 1)).innerHTML = "0" + numero;
		} else {
			document.getElementById("n" + (i + 1)).innerHTML = numero;
		}
	}
}

/* ================================================================= */

/* ================================================================= */

// funcionamento dos botões

//1º -  Botão "Novo Jogo"

const refresh = document.getElementById("refresh");

function refreshResult() {
	randomNumbers();
}

refresh.addEventListener("click", refreshResult);
