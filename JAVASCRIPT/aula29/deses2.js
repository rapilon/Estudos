const pessoa = {
    nome : 'Ramon',
    sobrenome : 'Pilon',
    idade : 24,
    endereco : {
        rua : 'pimba',
        numero : 890
    }
}

//Atribuição via desestruturação
//const {nome} = pessoa
//console.log(nome)
//const {nome: teste = '', sobrenome} = pessoa
//const {endereco : {rua, numero}} = pessoa
const {nome, ...resto} = pessoa
console.log(resto)