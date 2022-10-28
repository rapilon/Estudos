//                0         1        2
const nomes = ['Ramon', 'Bastos', 'Pilon']
//Funciona para strings,objetos,funções,números
// const nomes = new Array('Ramon', 'Bastos', 'Pilon')
nomes[2] = 'Tadeu'
const nome = nomes //são iguais e o que muda em um,muda o outro

const removido = nome.pop() // remover elementos
//const removido2 = nome.shift() remove do começo
const novo = [...nomes] // cópia
//delete nomes[2]

nome.unshift('Joao') // adicionar no indice 0
nomes.push('Ikari')
const novo2 = nomes.slice(1,3)
//const novo2 = nomes.slice(1,-2) remover 2 elementos do final
console.log(novo2, removido)

const nomeee = 'Ramon Bastos Pilon'
const nomi = nomeee.split(' ')
console.log(nomi)

const nomii = ['Ramon', 'Bastos']
const nomiii = nomii.join(' ')
console.log(nomiii) 