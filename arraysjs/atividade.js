//1
// const arrays = [
//     ['João']
//     [19]
// ];

// console.log(arrays[0][0], arrays[1],[0]);

//2
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const parteNumeros = numeros.slice(3, 8);
// console.log('Parte dos números:', parteNumeros);

//3
// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

// frutas.splice(2, 2, 'kiwi', 'Pêssego');

// console.log(frutas);
// //Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

//4
// const menuPrincipal = ['prato da casa', 'baiao de dois', 'pizza de queijo'];
// const menuSobremesas = ['mousse de maracuja', 'sorvete da casa', 'pizza de chocolate'];

// const menuCompleto = menuPrincipal.concat(menuSobremesas);
// console.log('veja o menu completo:', menuCompleto);

//5
// const matriz = [];
// let valorInicial = 1;

// for (let i = 0; i < 3; i++) {
//     let linha = [];
//     for (let j = 0; j < 3; j++) {
//       linha.push(valorInicial++);
//     }
//     matriz.push(linha);
//   }
  
//   console.log('Matriz de duas dimensões:');
//   console.log(matriz);
//   matriz.forEach(row => console.log(row)); // visualização em linhas e colunas

//6
// console.log('Elemento na segunda linha e terceira coluna:', matriz[1][2]);

//7
// matriz[2][1] = 15;
// console.log('Matriz após adição de elemento:', matriz);


//atividades utilizando o for/of 
//1 
// const nomes = ['Joao', 'Maria', 'Marcia', 'Regis'];

// //aqui eu usei um for clássico
// for (let i = 0; i < nomes.length; i++) {
//   console.log(i, nomes [i]);
// }

//2
// const lista = ['gato', 'cachorro', 'macaco'];

// function imprimeIndiceElemento(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(`índice ${i}, elemento ${arr[i]}`);
//       }
// }
// imprimeIndiceElemento(lista);

// const nomeS = ['Sla', 'Oq', 'Dizer'];

// function nomeSElementos(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(`indice ${i}, elemento ${arr[i]}`);
//     }
// }
// nomeSElementos(nomeS);

// const nameOfAnimals = ['cat', 'dog', 'monkey'];

// function nameOfAnimalsElements(arr){
//     for (let i = 0; i < nameOfAnimals.length; i++) {
//         console.log(`indice ${i}, elements ${arr[i]}`);
//     }
// }
// nameOfAnimalsElements(nameOfAnimals);

//3
// const listaNumeros = [10, 11, 12, 10, 11, 12, 10, 11, 12, 10, 11, 12];
// function soma(arr) {
//   let total = 0
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// console.log(soma(listaNumeros));

//4
// const arrMenoresMaiores = [5, 37, 18, 59, 12, -5];

// function imprimeMaiorEMenor(arr) {

//   let maior = 0;
//   let menor = 0;

//   for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > maior) {
//       maior = arr[i]
//     }
//     if (arr[i] < menor) {
//       menor = arr[i]
//     }
//   }
//   return `o maior número é ${maior} e o menor número é ${menor}`;
// }

// console.log(imprimeMaiorEMenor(arrMenoresMaiores));

//5

// const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
// console.log('Números pares do array:');

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     console.log(numeros[i]);
//   }
// }

//6
// const numeros = [10, 8, 6, 9, 7, 5];
// let soma = 0;

// for (let i = 0; i < numeros.length; i++) {
//   soma += numeros[i];
// }

// const media = soma / numeros.length;
// console.log('Array:', numeros);
// console.log('Média dos números:', media);

//map e forEach atividades
//1
// const arrNumeros = [1, 2, 3, 4];

// const multiplicaNumeros = arrNumeros.map((arr) => arr * 10);

// console.log(multiplicaNumeros);

//2
// const arrayNoms = ['João', 'Maria', 'Marcia', 'Deva'];

// arrayNoms.forEach((elemento, indice) => {
//     console.log(`indice: ${indice}, Nome: ${elemento}`);
// })

//3
// const numeros = [10, 20, 30, 40, 50];
// const numeroProcurado = 30;
// let posicao = -1;

// for(let i = -1;i < numeros.length; i++) {
//    if (numeros[i] === numeroProcurado) {
//     posicao = i;
//     break;
//    }
// }
// console.log(`Posição do número ${numeroProcurado} : ${posicao}`);

//4
// const nomesTurmaA = [
//     'João Paulo',
//     'Maria Santos',
//     'Pedro Almeida'
//   ];
  
//   const nomesTurmaB = [
//     'Carlos Oliveira',
//     'Ana Souza',
//     'Lucas Fernandes'
//   ];

// const todosAlunos = nomesTurmaA.concat(nomesTurmaB);
// const alunoProcurado = todosAlunos.find(nome => nome === 'João Pau');

// if (alunoProcurado) {
//     console.log('Aluno encontrado:', alunoProcurado);
// } else {
//     console.log('Aluno não encontrado.');
// }

//5
// const numeros = [6, 9, 12, 15, 18, 21];

// console.log('Elementos do array multiplicados por 3:');

// numeros.forEach(numero => {
//   const resultado = numero * 3;
//   console.log(resultado);
// });

// const indiceDoNumero18 = numeros.findIndex(numero => numero === 18);

// if (indiceDoNumero18 !== -1) {
//   console.log(`O número 18 está no índice ${indiceDoNumero18}.`);
// } else {
//   console.log('O número 18 não está presente no array.');
// }

// const numeros = [2, 4, 6, 8, 10];

// console.log('elemento multiplicado por 4:');

// numeros.forEach(numeros => {
//     const resultado = numeros * 4;
//     console.log(resultado);
// });

// const numeros = [20, 30, 40, 50];

// console.log('Os numeros sao multiplicados por 5:');

// numeros.forEach(numeros => {
//     const resultadoDaMultiplicacao = numeros * 5;
//     console.log(resultadoDaMultiplicacao);
// });

// const nomes = ['Jp', 'Dog', 'Cat'];
// const operator = [...nomes, 'JOAO'];

// // console.log(nomes);
// console.log(operator);

//atividades 
//1 
// const primeiroArray = [2, 3, 5, 8];
// const segundoArray = [...primeiroArray, 7];

// const exibaUmUnicoArray = [...segundoArray];
// console.log(`exiba um unico array: ${exibaUmUnicoArray}`);

//2
// const valores = [7, 8, 9, 10];

// function valor (nenhumValor){   
//     const valorNull = nenhumValor.reduce((acum, valor) => acum / valor, 0); 
//     const total = valorNull / nenhumValor.length;
//     return total;
// }
// console.log(valor(valores));

//3
// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

// const listas = coresLista1.concat(coresLista2);

// const listaCores =[...new Set(listas)];

// console.log(listaCores);

//4
// function filtraNumerosPares(arr) {
//     return arr.filter(num => num % 2 === 0); // Filtra apenas os números pares
// }

// const numArray = [1, 2, 3, 4, 5, 6];
// const listaNumerosPares = filtraNumerosPares(numArray);
// console.log(listaNumerosPares); // Saída: [2, 4, 6]

//5
// const listaNumeros = [3, 6, 9, 4, 12, 2, 7];

// function filtraNumeros(arr) {
//     return arr.filter(num => num % 3 === 0 && num > 5); // Filtra números múltiplos de 3 e maiores que 5
// }

// const numerosFiltrados = filtraNumeros(listaNumeros);
// console.log(numerosFiltrados); // Saída: [6, 9, 12]

//6
// function somaElementosDoArray(arr) {
//     return arr.reduce((acum, atual) => acum + atual, 0); // Soma os elementos do array
//   }
  
//   const listaNumeros = [1, 2, 3, 4, 5];
//   const somaTotal = somaElementosDoArray(listaNumeros);
//   console.log(somaTotal); // Saída: 15