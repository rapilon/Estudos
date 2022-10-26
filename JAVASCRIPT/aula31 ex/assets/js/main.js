function mostraSegundos(segundo) {
    let data = new Date(segundo * 1000);
    return data.toLocaleTimeString('pt-BR',{
     hour12: false,
     timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.timer')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundo = 0;
let timer;
function iniciaRelogio() {
     timer = setInterval(function() {
        segundo++;
        relogio.innerHTML = mostraSegundos(segundo)
    }, 1000)
}

document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('zerar')) {
        clearInterval(timer)
        relogio.innerHTML= '00:00:00'
        relogio.classList.remove('pausado')
        segundo = 0;
    }
    if(el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio()
    }
    if(el.classList.contains('pausar')) {
        relogio.classList.add('pausado')
        clearInterval(timer)
    }
})

// iniciar.addEventListener('click', function(event) {
//     relogio.classList.remove('pausado')
//     clearInterval(timer)
//     iniciaRelogio()
// })
// pausar.addEventListener('click', function(event) {
//     relogio.classList.add('pausado')
//     clearInterval(timer)
// })
// zerar.addEventListener('click', function(event) {
//     relogio.innerHTML= '00:00:00'
//     segundo = 0;
// })
