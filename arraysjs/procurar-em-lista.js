const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota (aluno) {
    if (lista[0].includes(aluno)) {
       const [alunos, medias] = lista; 
       const indice = alunos.indexOf(aluno); //indexOF (vai retornar o indice da primeira ocorrencia do valor fornecido) (procura a posiçao e retorna o indice e o numero indicado)
       const mediaAluno = medias[indice];
       console.log(`${aluno} tem a media ${mediaAluno}`);
    } else {
        console.log('Estudante não existe na lista');
    }
}

exibeNomeENota('Juliana');
exibeNomeENota('Vini');