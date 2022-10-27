// Factory function (função fábrica)
// Constructor function (função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        //Setter
        set nomeCompleto(valor){
          valor = valor.split(' ');
          this.nome = valor.shift();
          this.sobrenome = valor.join(' ')
        },
        fala(assunto) {
            return `${this.nome} está ${assunto}.`
        },
        altura : a,
        peso : p,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Ramon', 'Pilon', 1.7, 80)
console.log(p1)
console.log(p1.sobrenome)
console.log(p1.imc)