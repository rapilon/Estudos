function Produto(nome, preco, estoque) {   
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable:true, 
        configurable: true,
        get: function() {
          return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Opa')
            }
        }
    })

}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 18
console.log(p1)