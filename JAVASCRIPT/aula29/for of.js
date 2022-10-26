//            0123....
const nome = ['Ramon','Bastos', 'Pilon']

// for of não funciona com objetos por não serem iteráveis

//for (let i = 0;i < nome.length; i++) {
//    console.log(nome[i])
//}

//for (let i in nome) {
//    console.log(nome[i])
//}

for (let valor of nome) {
    console.log(valor)
}

console.log('###')

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})