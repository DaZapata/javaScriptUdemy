// //ES5 - variables
// var nombre5 = "David";
// console.log(nombre5);
// var edad5 = 34;
// nombre5 = "Carlos";
// console.log(nombre5);

// //ES6 - variables
// //const no se pueden modificar
// const nombre6 = "Jose";
// // let son modificables
// let edad6 = 23;
// console.log(nombre6);
// //nombre6 = "Ana";
// console.log(nombre6);
// edad6 = 40;
// console.log(edad6);

// //bloques y alcance de las variables
// // var son variables que existen en todo el codigo
// // let solo existe dentro del scope de la funcion
// var test;
// test = 10;

// function prueba() {
//   test = 15;
// }

// prueba();
// console.log(test);

// // Template String

let nombre = "pablo";
let apellido = "vasquez";
// const ciudad = "medellin";
// const nacimiento = 1985;

// function calcularEdad(year) {
//   return 2021 - year;
// }

// //ES5
// console.log(
//   nombre +
//     " " +
//     apellido +
//     " nacio en " +
//     ciudad +
//     " , y su edad es " +
//     calcularEdad(1987)
// );

// //ES6
// console.log(
//   `${nombre} ${apellido}, nacio en ${ciudad}, y su edad es ${calcularEdad(nacimiento)}`
// );

let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);
console.log(`${nombre}`.repeat(5));
//includes revisa si existe esa palabra dentro de la variable
console.log(nombreCompleto.includes("blo"));
console.log(nombreCompleto.startsWith("pe"));
console.log(nombreCompleto.endsWith("pe"));

//funciones flecha

const years = [2000, 2005, 2008, 2012];

//ES5
var edad5 = years.map(function (el) {
  return 2021 - el;
});
console.log(edad5);

//ES6
let edad6 = years.map((el) => 2021 - el);
console.log(edad6);

edad6 = years.map((el, index) => `Edad ${index + 1}:  ${2021 - el}`);
console.log(edad6);

edad6 = years.map((el, index) => {
  const yearActual = new Date().getFullYear();
  const edad = yearActual - el;
  return `Edad ${index + 1}: ${edad}`;
});
console.log(edad6);

//spotify
//s5w6562pjrsorlkfjs5fkwjm0
//icfes222244761667

// function cuadrado(num) {
//   return num * num;
// }

// console.log(cuadrado(5));

// const cuadrado = (num) => num * num;
// console.log(cuadrado(4));

const personas = [
    {
        nombre: 'Pablo',
        edad: 20
    },
    {
        nombre: 'Ana',
        edad: 22
    },
    {
        nombre: 'Carlos',
        edad: 30
    },
    {
        nombre: 'Pepe',
        edad: 35
    }
];

// const menores30 = personas.filter(function(persona){
//     return persona.edad < 30;
// });

const menores30 = personas.filter((persona) => persona.edad < 35);
console.log(menores30);



