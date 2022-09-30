function decre(x) {
    for (let y = 0; y <= x ; y++) { // for (let y = x; y >= 0;y--)
        if (y % 2 == 0) {
            console.log(y)
        }
    }
}
decre(10)

function decret(x) {
   while(x >= 0) {
    if (x % 2 ==0) {
        console.log(x)
        x--
    }else { x--}
   }
}

decret(10)