//Factory function / constructor functions / Classes
//Fábrica
function criaPessoa(nome,sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p5 = criaPessoa('Ramon', 'Bastos')
console.log(p5.nomeCompleto)

//Construtora
function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //return está implicito, ele vai retornar o objeto criado pelo new
    //Object.freeze(this) para proibir mudanças nos valores das chaves
}

// new cria um objeto e atrela o this {} <- this -> this
const p1 = new Pessoa('Ramon', 'Bastos')
Object.freeze(p1)
p1.nome = 'Lineu'
const p2 = new Pessoa('Lineu', 'Silva')
console.log(p1)