function retornarnumero(n) {
  if (n % 2 == 0) {
    console.log(`n agora é par: ${n}`)
  } else {
    console.log(n)
    retornarnumero(n-1)
  }
}



function recursao (n) {
    if (n - 1 < 2) {
        console.log('Recursão parou')
    }else if (n % 2 != 0) {
      console.log('Número ímpar :' + n)
      recursao(n-1)
    } else {
        console.log(`Número par : ${n}`)
        recursao(n-1)
    }
}

recursao(39)