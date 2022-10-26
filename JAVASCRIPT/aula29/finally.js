try {
// É executado quando não há erros
} catch {
// É executado quando há erros
}  finally {
// Sempre será executado
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de data');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
}

try {
    const hora = new Date('11-11-1999 18:58:59');
    console.log(retornaHora(88))
} catch {
    //tratar erro // console.log(e)
} finally {
    console.log('Tenha um bom dia')
}

