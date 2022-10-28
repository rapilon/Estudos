const a1 = [1,2,3]
const a2 = [3,4,5]
//const a3 = a1.concat(a2)
// ...rest  ...spread operator(espalhar)
const a3 = [...a1,...a2,'Ramon',...[7,8,9]]
console.log(a3)