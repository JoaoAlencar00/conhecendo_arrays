const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']; 

//primeiro parametro (quantidade de itens), segundo parametro (quantidade de itens que vao ser deletados), terceiro parametro (elemento que vai ser incluido nesse local)
listaEstudantes.splice(1, 2, 'Rodrigo');
// listaEstudantes.push('Rodrigo');

console.log(listaEstudantes);