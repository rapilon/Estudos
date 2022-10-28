// Dobre os números
//               0  1  2 3 4....
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
const numerosDobro = numeros.map( e => e*2)

console.log(numerosDobro)
console.log(numeros)

//Para cada elemento :
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave 'nome' do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'William', idade: 55},
    {nome: 'José', idade: 19},
    {nome: 'Rosana', idade: 47},
]

const pessoaString = pessoas.map( obj => obj.nome)
const pessoaIdade = pessoas.map( obj => ({idade : obj.idade}))

const comIds = pessoas.map( (obj,indice) => {
    const newObj = {...obj}; // sem isso iria alter o array original
    newObj.id = indice;
    return newObj;
})
console.log(pessoaString)
console.log(pessoaIdade)
console.log(comIds)
console.log(pessoas)
