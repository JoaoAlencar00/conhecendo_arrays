const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota) { //parametro nota guarda cada uma das iteraçoes de elemento 
    somaDasNotas += nota; //acessa cada elemento do array 
})

const media = somaDasNotas / notas.length;
console.log(`a media das notas é ${media}`);