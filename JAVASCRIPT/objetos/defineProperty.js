//defineProperty - defineProperties
function Produto(nome, preco, estoque) {  
    Object.defineProperty(this, 'estoque', {
        enumerable:true, // mostra a chave
        value: estoque,  // valor
        writable: true, // pode alterar
        configurable: true // configurável, não pertmite apagar nem reconfigurar
    })

    Object.defineProperties(this, {
        nome : {
            enumerable:true, // mostra a chave
            value: nome,  // valor
            writable: false, // pode alterar
            configurable: true // configurável, não pertmite apagar nem reconfigurar
        },
        preco: {
            enumerable:true, // mostra a chave
            value: preco,  // valor
            writable: false, // pode alterar
            configurable: true // configurável, não pertmite apagar nem reconfigurar
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 50000;
//delete p1.estoque;
console.log(p1)