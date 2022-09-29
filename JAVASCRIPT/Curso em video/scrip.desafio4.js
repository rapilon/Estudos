function clicar(){
    let x = window.prompt('Qual produto você está comprando ?')
    let y = Number(window.prompt(`Qaunto custa ${x} que você está comprando ?`))
    let z = Number(window.prompt(`Qual foi o valor que você deu para pagar ${x} ?`))
    window.alert(`Você comprou ${x} que custou R$${y.toFixed(2)}. Deu R$${z.toFixed(2)} em dinheiro e vai receber R$${(z-y).toFixed(2)} de troco. Volte Sempre!`)
}