const jason = {
    "nome": "Derulo",
    "talk" : "Dirty",
}

console.log(jason.nome)
console.log(jason.talk)
let ab = JSON.stringify(jason)
console.log(ab)
console.log(JSON.parse(ab))
console.log(jason)