// let cont = document.querySelector('#cont')

// function zero(num) {
//     return num >= 10 ? num : `0${num}`
// }

// function formataData(data) {
//    let diaS = data.getDay()+1
//    let dia = zero(data.getDate());
//    let mes = zero(data.getMonth()+1);
//    let anos = zero(data.getFullYear());
//    let hora = zero(data.getHours());
//    let min = zero(data.getMinutes());

//    switch(diaS) {
//     case 1 :
//         diaS = 'Domingo';
//         break;
//     case 2 :
//         diaS = 'Segunda-feira';
//         break;
//     case 3 :
//         diaS = 'Terça-feira';
//         break;
//     case 4 :
//         diaS = 'Quarta-feira';
//         break;
//     case 5 :
//         diaS = 'Quinta-feira';
//         break;
//     case 6 :
//         diaS = 'Sexta-feira';
//         break;
//     case 7 :
//         diaS = 'Sábado';
//         break;
//    }

//    switch(mes) {
//     case 1 :
//        mes = 'janeiro';
//       break;
//     case 2 :
//        mes = 'fevereiro';
//       break;
//     case 3 :
//        mes = 'março';
//       break;
//     case 4 :
//        mes = 'abril';
//       break;
//     case 5 :
//        mes = 'maio';
//       break;
//     case 6 :
//        mes = 'junho';
//       break;
//     case 7 :
//        mes = 'julho';
//       break;
//     case 8 :
//        mes = 'agosto';
//       break;
//     case 10 :
//        mes = 'outubro';
//       break;
//    }
   

//    return `<strong><p>${diaS}, ${dia} de ${mes} de ${anos}<p/>${hora}:${min}<strong/>`
// }


// const data = new Date()
// const p = formataData(data)
// cont.innerHTML= p

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

function getDiasSemanaTexto(diasemana){
    const diasSemana = ['domingo','segunda']
    return diasSemana[diasemana]
}