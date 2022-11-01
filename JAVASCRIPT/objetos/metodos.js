const produto = {nome: 'Produto', preco: 20}
// const caneca = {
//     ...produto,  //maneira de copiar o objeto sem linkar ambos
//     material: 'porcelana' //adicionar novas chaves é possível
// };

// const caneca = Object.assign({}, produto, {material: 'porcelana'}) // Outra maneira de copiar e adicionar novas infos
// Object.freeze(produto);

// caneca.nome = 'Outro nome'
// caneca.preco = 25
// console.log(caneca)
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))