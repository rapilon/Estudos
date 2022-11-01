//Retorne a soma do dobro de todos os pares
// Filtrar pares
//Dobrar os valores
//Reduzir (somar tudo)
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
const nuPares = numeros.
filter(x => x % 2 === 0)
.map(e => e*2)
.reduce((acu, va)=> acu + va)
// const nuDobro = nuPares.map(e => e*2)
// const nuSoma = nuDobro.reduce((acu, va)=>{
//      acu += va;
//      return acu
// }, 0)
console.log(nuPares)