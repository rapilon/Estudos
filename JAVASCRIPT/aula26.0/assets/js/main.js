
function calpeso() {
    let peso = window.document.getElementById('nu1')
    let altura = window.document.getElementById('nu2')
    let res = window.document.getElementById('res')
    let pe = Number(peso.value)
    let alt = Number(altura.value)
    let imc = pe / (alt*alt)
    let resu = '' 
    if (peso.value === '' || altura.value === '') {
        res.innerHTML =('Por favor digite todas as informações')
    }else {
        if (imc < 18.5) {
        resu = ('Abaixo do peso')
       } else if (imc >= 18.5 && imc  <= 24.9) {
        resu = ('Peso normal')
       } else if (imc >= 25 && imc  <= 29.9) {
       resu = ('Sobrepeso')
       } else if (imc >= 30 && imc  <= 34.9) {
       resu = ('Obesidade grau 1')
       } else if (imc >= 35 && imc  <= 39.9) {
       resu = ('Obesidade grau 2')
       } else { resu = ('Obesidade grau 3')}
       res.innerHTML =(`Seu resultado é ${imc.toFixed(2)}(${resu})`)}
    
}




