//arreglos

var nombres = ['david', 'maria', 'jeronimo', 'chanel', 'pepe']
var frutas = ['lulo', 'pera', 'limon', 'manzana']

// forma de ecorrer un array direfente de for
nombres.forEach(function (elemento, indice, array){
    console.log(elemento, indice)
})

//agregar elemento al final de un array
nombres.push('pedro')
console.log(nombres)

//agregar elemento al principio de un array
nombres.unshift('luis')
console.log(nombres)

//eliminar el ultimo elemnto de un array
nombres.pop()
console.log(nombres)

//eliminar el primer elemento de un array
nombres.shift()
console.log(nombres)

//metodo que devuelve la posicion del elemento que le pasamos como argumento
var pos = nombres.indexOf('maria')
console.log(pos)

//metodo que rebana el array, el primer numero dice desde done elimina y el segundo hasrta donde
nombres.splice(1,2)
console.log(nombres)

//metodo que imprime el array desde el final hasta el inicio
nombres.reverse()
console.log(nombres)

//arreglos con elementos de diferentes tipos

var persona = ['pablo', 'velez', 36, '2500613', 1.80]
console.log(persona)