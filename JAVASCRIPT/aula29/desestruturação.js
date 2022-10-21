// ...rest, ...spread
const numeros = [100,200,300,400,500]
const [primeiro,segundo,...resto] = numeros
console.log(primeiro,segundo)
console.log(resto)
const [um, , tres, , cinco] = numeros
console.log(um,tres,cinco)
//                  0      1
//                0 1 2  0 1 2
const numeross = [[1,2,3],[4,5,6]]
console.log(numeross[0][1]);
const [lista1, lista2] = numeross;
console.log(lista2)
let [, ,binba] = lista2
console.log(binba)