

function clicar() {
let res = window.document.getElementById('res')
let txt = window.document.getElementById('txt')

    if (txt.value === 'Brasil' || txt.value === 'brasil') {
    res.innerHTML = `Você é Brasileiro(a)`
} else {
    res.innerHTML = `Você é estrangeiro do país : ${txt.value}`
}
}

