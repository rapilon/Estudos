const cachorro = {
    raca : '?',
    setRaca:function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

cachorro.setRaca('Rottwailer')
console.log(cachorro.raca)
console.log(cachorro.getRaca())