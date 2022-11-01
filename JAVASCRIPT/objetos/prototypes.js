//Construtora -> molde(classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
   // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
   return this.nome + ' ' + this.sobrenome;
}

//instância
const pessoa1 = new Pessoa('Lineu', 'Silva') //<- Função construtora
const pessoa2 = new Date(); // Função construtora