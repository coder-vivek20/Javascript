let score=55

console.log(typeof(score))

let conversionString=String(score)
console.log(typeof conversionString)
console.log(conversionString)

let score1="55A";

console.log(typeof score1)

let convertscore=Number(score1)
console.log(typeof convertscore)
console.log(convertscore)

//so first one will definately converts number into string but in this case 
//let score1="55A"; suppose we have number and one character also. so it will convert to number but value  -
// - will be NaN(Not a Number)
