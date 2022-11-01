const pessoa = {
    nome:'Ramon',
    sobrenome: 'Pilon'
};

const chave = 'nome'
console.log(pessoa[chave]) // == pessoa['nome']
console.log(pessoa.sobrenome)

const pessoa1 = new Object();
pessoa1.nome = 'Ramon';
pessoa1.sobrenome = 'Pilon'
pessoa1.peso = 85
pessoa1.idade = 24
// delete pessoa1.nome
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome`)
}

pessoa1.getDatadeNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade; 
}
pessoa1.falarNome()
console.log(pessoa1.getDatadeNascimento())

for (let chave in pessoa1) {
   // console.log(chave)
   console.log(pessoa1[chave])
}