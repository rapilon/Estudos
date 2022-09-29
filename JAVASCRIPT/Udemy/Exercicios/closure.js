function lembrarsoma(x) {
    return y => x + y;
}

let soma1 = lembrarsoma(2)
console.log(soma1(8))

function contador(i) {
    let cont = i;
    let somarCont = function() {
        console.log(cont);
        cont++;
    }
    return somarCont;
}

let meucont = contador(4)
meucont()
meucont()
meucont()