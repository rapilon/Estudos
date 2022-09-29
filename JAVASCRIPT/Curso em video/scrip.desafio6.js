function clicar() {
    let temp = Number(window.prompt('Digite uma temperatura em Celsius'))
    let k = temp + 273.15
    let f = temp * 1.8 + 32
    let res = window.document.getElementById('res')
    res.innerHTML = `<h2>A temperatura de ${temp}°C, corresponde a...</h2>`
    res.innerHTML += `${k.toFixed(2)}°K (Kelvin) <br>`
    res.innerHTML += `${f.toFixed(2)}°F (Farenheit)`
}