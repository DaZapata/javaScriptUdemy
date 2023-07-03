/////// Arrglos ES^ //////

const ceviche = ['pescado', 'mariscos', 'cebolla']

//agregar un item al final del array
ceviche.push('limon')

// agregar un item al inicio del array
ceviche.unshift('papas')

// elimina el primer elemento del array
console.log(ceviche.shift())

//elimina el ultimo item del array
ceviche.pop();

// ceviche[0] = 'papas'
//console.log(ceviche[ceviche.length -1]);

console.log(ceviche);

//eliminar o agregar un item de cualquier posicion
ceviche.splice(1,0, 'limon')
console.log(ceviche);