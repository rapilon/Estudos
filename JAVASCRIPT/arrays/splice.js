//               -5       -4       -3         -2        -1 
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

//Push()
nomes.splice(nomes.length,0,'Luix', '16')

//unshift
nomes.splice(0,0,'Banana')

// nomes.splice(índice,delete,adicionar)
// = (-1,1) = nomes.pop()
// const removidos = nomes.splice(4,1) 

//(-2,Number.MAXVALUE = maior número possivel, ir até o final do array)
// console.log(nomes, removidos)

//shift()
// const removido = nomes.splice(0,1)
// console.log(nomes)