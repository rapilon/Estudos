// for in lê os índices ou chaves do objeto

const pessoa = {
    nome : 'Ramon',
    sobrenome : 'Pilon',
    idade : 24
};
const chave = 'nome'
console.log(pessoa[chave])
console.log(pessoa.nome)
console.log(pessoa['nome'])

for (let i in pessoa) {
    console.log(i)
}
for (let i in pessoa) {
    console.log(i, pessoa[i])
}