//1
// Criando um array esparso
const arrayEsparso = [];

// Atribuindo valores a alguns elementos do array
arrayEsparso[1] = 'Elemento 1';
arrayEsparso[3] = 'Elemento 3';
arrayEsparso[7] = 'Elemento 7';

// Imprimindo os resultados
console.log(arrayEsparso);
console.log(arrayEsparso.length);

//2
// Inicializando o array com cinco elementos
let meuArray = [10, 20, 30, 40, 50];

// Exibindo o array antes da alteração
console.log("Array antes da alteração: ", meuArray);

// Atribuindo um novo valor para a primeira posição (índice 0) do array
meuArray[0] = 5;

// Exibindo o array depois da alteração
console.log("Array depois da alteração: ", meuArray);

//3
const meuArray = []; // Criando um array vazio
meuArray.push(5); // Adicionando números ao array
meuArray.push(10);
meuArray.push(15);

//Exibição dos Itens
console.log("Itens no array meuArray:", meuArray);

//Atualização de Itens
//Dobrando o valor do primeiro elemento
meuArray[0] = meuArray[0] * 2; 
//mesma operação utilizando o operador `*=`
//meuArray[0] *= 2;
console.log("Array após a atualização do primeiro elemento:", meuArray);

//4
// Criando um array vazio
let meuArray = [];

// Atribuindo valores ao array usando o método push()
meuArray.push(10);
meuArray.push(20);
meuArray.push(30);

// Exibindo o array resultante
console.log("Array resultante: ", meuArray);

//5
// Criando um array vazio para representar a fila de animais na clínica
const clinica = [];

// Chegada de animais na clínica
clinica.push("Cachorro");
clinica.push("Gato");
clinica.push("Coelho");

// Exibindo a fila de animais na clínica após a chegada
console.log("Fila de animais após a chegada: ", clinica);

// Removendo cada animal da lista:
clinica.pop();
clinica.pop();
clinica.pop();

// Exibindo o estado final da lista:
console.log("Fila de animais aguardando: ", clinica);

