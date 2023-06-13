let numeros =  [10,40,30,20,15,5];
numeros.sort(function(a, b){
   
    return a - b});


let numeros2 =[];

for (let index = 0; index < numeros.length; index++) {
    numeros2.push(parseInt(numeros[index]));
    
}

let max = Math.max.apply(null,numeros2);
let min = Math.min.apply(null,numeros2);
document.write (`<h1> Array Ordenado  = ${numeros} </h1>`);
document.write (`<h1> Numero Mayor  = ${numeros} </h1> `);
document.write (` <h1> Numero Menor  = ${numeros} </h1> `);