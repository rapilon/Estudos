function dados(x) {
    if (x === String(x)) {  //Poderia ter usado typeof x === 'string'
        console.log('Dado do tipo string')
    } else if (x === Number(x)) {
        console.log('Dado de tipo número')
    } else if (x === true || x === false ) {
        console.log('Dado de tipo boolean')
    }
}

dados('opa')
dados(true)
dados(45)
