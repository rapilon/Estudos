//Filter -> sempre vai retornar um array, com a mesma quantidade ou menor
//Retorne os números maiores que 10
//num.filter(valor,indice,array)
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosFiltrados = numeros.filter(valor => valor > 10)
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//    console.log(valor,indice,array)
//     return valor > 10;
// });
console.log(numerosFiltrados)


//Retorne as pesoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luix', idade : 62},
    {nome: 'Maria', idade : 55},
    {nome: 'Ramon', idade : 24},
    {nome: 'Rosana', idade : 17},
    {nome: 'William', idade : 38},
    {nome: 'José', idade : 80},
]
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande)

const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 50)
console.log(pessoasMaisVelhas)

const pessoasTerminaA = pessoas.filter(obj => {
   return obj.nome.toLowerCase().endsWith('a')});
    console.log(pessoasTerminaA)