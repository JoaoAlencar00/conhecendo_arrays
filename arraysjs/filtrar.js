const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

// const tamanhoNome = alunos.filter((aluno) => {  //filter sempre vai retornar um valor false ou true.
//     return aluno.length < 4;     //length serve para numeros e nomes 
// });

// console.log(tamanhoNome);

//funcao callback, (alem do primeiro parametro) podemos adicionar um (segundo parametro que é o indice)
const reprovados = alunos.filter((_, i) => {  
    return medias[i] < 7; //o i vai percorrer toda a lista de alunos e vai trazer a informação precisa. 
});

console.log(reprovados);

