function Pessoa(nome, sobrenome) {
    //Atributos ou metodos privados
    const ID = 12345;
    const metodoInterno = function() {};

    //Atributos ou metodos públicos
    this.nome = nome; //Pessoa.nome
    this.sobrenome = sobrenome;
    this.metodo = function() {
        console.log(this.nome + ':Sou um método');
    }
}

const p1 = new Pessoa('Ramon', 'Bastos')
const p2 = new Pessoa('Ramon', 'Pilon')
p2.metodo()