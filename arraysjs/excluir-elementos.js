const notas = [10, 6, 8, 5.5, 10];

notas.pop(); // exclui a nota final do elemento // 

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media.toFixed(2)); // toFixed determina a quantidade de casas nos parenteses //

// (9.999).toFixed(2); // toFixed é um método de Number
// 'string'.toUpperCase(); // toUpperCase é um método de String