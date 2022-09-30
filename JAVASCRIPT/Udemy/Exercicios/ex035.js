const calculadora = {
    somar : function(a,b) { //a função não precisa de nome
        return console.log(a+b)
    },
    subtrair : function (a,b) {
        return console.log(a-b)
    },
    multiplicar : function(a,b) {
        return console.log(a*b)
    },
    dividir : function(a,b) {
        return console.log(a/b)
    } 
}
calculadora.somar(1,2)
calculadora.subtrair(10,8)
calculadora.multiplicar(5,5)
calculadora.dividir(80,4)
