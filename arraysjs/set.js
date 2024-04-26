const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const nomesAtualizados = new Set(nomes);  //Set ele armazena valores unicos e tem que ser escrito com S maiusculo 
                            //[...nomesAtualizados]  
const ListanomesAtualizados = [...new Set(nomes)]; //transformamos em um array, agora podemos utilizar os metodos for,reduce e etc..

// console.log(nomesAtualizados);
console.log(ListanomesAtualizados);
