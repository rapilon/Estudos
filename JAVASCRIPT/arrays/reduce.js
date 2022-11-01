// Some todos os números (reduce)
// Retorne um array com os pares (filter)
//Retorne um array com o dobro dos valores(map)
//               0  1  2 3 4....
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

const numerosSoma = numeros.reduce(function(acumulador, valor, indice, array){acumulador += valor;
       return acumulador;
},0) //valor do acumulador, é opcional, o default dele é o primeiro elemento do array

const numerosPares = numeros.reduce(function(acumulador, valor, indice, array){ if (valor % 2 === 0) acumulador.push(valor)
    return acumulador;
},[]);

console.log(numerosSoma)
console.log(numerosPares)


//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luix', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 10},
    {nome: 'Rosana', idade: 105},
    {nome: 'Wallace', idade: 48},
]

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);