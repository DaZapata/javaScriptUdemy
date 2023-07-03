/////// Arrglos ES^ //////

const ceviche = ['pescado', 'mariscos', 'cebolla']

// //agregar un item al final del array
// ceviche.push('limon')

// // agregar un item al inicio del array
// ceviche.unshift('papas')

// // elimina el primer elemento del array
// console.log(ceviche.shift())

// //elimina el ultimo item del array
// ceviche.pop();

// // ceviche[0] = 'papas'
// //console.log(ceviche[ceviche.length -1]);

// console.log(ceviche);

// //eliminar o agregar un item de cualquier posicion
// ceviche.splice(1,0, 'limon')

// ///foreach y for//////
// ceviche.forEach(function(item, index){
//     console.log(index);
//     console.log(item);
// })

// for(let i=0; i < ceviche.length; i++){
//     console.log(`Indice: ${i}, ${ceviche[i]}`);
// }

// console.log(ceviche);

// si el indexof da -1 es porque no se encuentra en el arreglo lo que se esta buscando
//console.log(ceviche.indexOf('pescado'));

///pero con objetos se busca con findIndex///

const ensalada = [
    {
        codigo: 1,
        titulo: 'pescado'
    },
    {
        codigo: 2,
        titulo: 'mariscos'
    },
    {
        codigo: 3,
        titulo: 'cebolla'
    },
]

// const index = ensalada.findIndex(function(ing, index) {
//     console.log(ing);
//     return ing.titulo === 'cebolla'
// })

//busqueda inteligente dentro de un arreglo
const buscarIngrediente = function(ensalada, titulo){
    const index = ensalada.findIndex(function(ing, index){
        return ing.titulo === titulo;
    })
    return index;
}

//console.log(ensalada[buscarIngrediente(ensalada, 'cebolla')]);

///filtrado inteligente en arreglos/////
// const paises = ['colombia', 'peru', 'ecuador', 'mexico']
// console.log(paises.filter(pais => pais.includes('o')));

// const filtrarIngredientes = ensalada.filter(function(ing, index){
//     const ingredientes = ing.titulo.includes('e')
//     return ingredientes
// })

// //console.log(filtrarIngredientes);

// console.log(ensalada);
// ///ordenamiento en arreglos/////
// ensalada.sort(function(a,b){
//     if (a.titulo > b.titulo){
//         return 1
//     }
//     if (a.titulo < b.titulo){
//         return -1
//     }
// })
// console.log(ensalada);

const nombres = ['zimon', 'teo', 'ana', 'carlos']
console.log(nombres);

nombres.sort();
console.log(nombres);