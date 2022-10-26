try {
    console.log(nãoExisto)
} catch (err) {
   console.log('não existe')
}

function soma(x,y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser numeros') //ou throw new Error
    }
    return x + y;
}

try {
    console.log(soma(5,4))
    console.log(soma('1',2))
} catch(error) {
   // console.log(error)
   console.log('Amigavel')
}