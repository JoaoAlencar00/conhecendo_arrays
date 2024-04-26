const notas = [10, 8.5, 5, 6.5, 8, 7.5]; //comprimento do array: 6 elementos (length)

//primeira expressao: executada apenas uma vez 
//segunda expressao: condiçao de execuçao
//terceira expressao: executada sempre ao final do bloco
for (let indice = 0; indice < notas.length; indice++) {  //(indice) ou (i) 
    console.log(indice, notas[indice]);
}
