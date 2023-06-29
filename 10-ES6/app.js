// // ---ES5 variables-----
// var nombre5 = "David Zapata";
// var edad = 35;
// console.log("El nombre es " + nombre5);

// // ----ES6 variables----
// // las variables declaradas con let se pueden mutar, las const son constantes y no lo permites
// const nombre6 = "pedro";
// //let edad6 = 6;
// //console.log("El nombre es " + nombre6 + " y la edad es " + edad6);

// //----bloques y alcance de las variables----
// var test;
// test = 10;
// function prueba() {
//   test = 15;
// }

// prueba();
// console.log(test);

// // aca solo se imprime la variable var
// // {
// //   let name = 'pipe';
// //   const edad7 = 23;
// //   var char = 'c';
// // }

// // console.log(edad7);

// // template strings

// let nombre8 = "pablo";
// let apellido = "gomez";
// let year = 1987;

// function calcularEdad(year) {
//   return 2021 - year;
// }

// // ES5
// console.log(
//   "Tu nombre es " +
//     nombre8 +
//     " " +
//     apellido +
//     " y su edad es " +
//     calcularEdad(year)
// );

// // ES6
// console.log(
//   `Tu nombre es ${nombre8} ${apellido} y tienes ${calcularEdad(year)} años`
// );

// // FUNCIONES DE CADENAS ES6
// let nombreCompleto = `${nombre8} ${apellido}`;
// console.log(nombreCompleto);

// // repetir una cadena de texto
// console.log(`${nombre8} `.repeat(5));

// // mirar si la cadena tiene un texto cualquiera que le pasamos por parametros
// console.log(nombreCompleto.includes("blo"));

// // mirar si el string comienza con lo que le enviamos por parametros
// console.log(nombreCompleto.startsWith("pa"));

// // mirar si el string termina con lo que le mandamos por parametros
// console.log(nombreCompleto.endsWith("sa"));

// // -- funciones flecha --

// const years = [2000, 2005, 2008, 2012];

// // ES5
// var edad5 = years.map(function (el) {
//   return 2019 - el;
// });

// console.log(edad5);

// // ES6 funciones flecha
// let edad6 = years.map((el) => 2019 - el);
// console.log(edad6);

// edad6 = years.map((el, index) => `Edad ${index + 1}: ${2019 - el}`);
// console.log(edad6);

// edad6 = years.map(
//   (el, index) => {
//     const yearActual = new Date().getFullYear();
//     const edad = yearActual - el;
//     return `Edad ${index + 1}: ${edad}`;
//   }
// );
// console.log(edad6);


// // -- funcion normal ---
// function cuadrado(num){
//   return num * num
// }
// console.log(cuadrado(5));

// // funcion flecha
// const cuadradoF = (num) => num * num;
// console.log(cuadradoF(6));

// const personas = [
//   {
//     nombre: 'david',
//     edad: 34
//   }, 
//   {
//     nombre: 'maria',
//     edad: 31
//   },
//   {
//     nombre: 'jeronimo',
//     edad: 7
//   },
//   {
//     nombre: 'chanel',
//     edad: 3
//   }
// ];

// //-- funcion normal--
// const menores30 = personas.filter(function(personas){
//   return personas.edad < 30;
// });
// console.log(menores30);

// // --funcion flecha --

// const menores25 = personas.filter((persona) => persona.edad < 25);
// console.log(menores25);


// const _years = [2000, 2005, 2008, 2012];

// var edad5 = _years.map(function(el){
//   return 2023 - el;
// });

// console.log(edad5);

//ES6

// let edad6 = _years.map(el => 2023 - el);
// console.log(edad6);

// edad6 = _years.map((el, index) => `Edad ${index + 1}: ${2023 - el}`);
// console.log(edad6);

// edad6 = _years.map(
//   (el, index) =>{
//     const yearActual = new Date().getFullYear();
//     const edad = yearActual - el;
//     return `Edad ${index + 1}: ${edad}`
//   }
// );
// console.log(edad6);

//ES5
// function cuadrado(num){
//   return num * num
// };

//ES6
// const cuadrado = (num) => num * num;
// console.log(cuadrado(5));

// const personas = [
//   {
//     nombre: "Pablo",
//     edad: 20
//   },
//   {
//     nombre: "Carlos",
//     edad: 25
//   },
//   {
//     nombre: "Juan",
//     edad: 28
//   },
//   {
//     nombre: "Samuel",
//     edad: 18
//   }
// ];

// const menores = personas.filter(function(persona){
//   return persona.edad < 25
// });

// const menores = personas.filter((persona) => persona.edad < 25);

// console.log(menores);

/******Destructuracion ********/

//ES5
var datos = ['Pablo', 25];
// var nombre = datos[0];
// var edad = datos[1];

//ES6
// var [nombre, edad] = ['Pablo', 25];
// console.log(nombre);
// console.log(edad);

//con objetos
// const persona = {
//   nombre: 'Carlos',
//   edad: 30
// }

// const {nombre, edad} = persona;
// console.log(nombre);
// console.log(edad);

// const calcMayoriaEdad = (year) => {
//   const edad = new Date().getFullYear() - year;
//   const mayoria = edad >= 18 ? true : false;
//   return [edad, mayoria];
// }

// const [edad2, mayoria] = calcMayoriaEdad(2014);
// console.log(edad2);
// console.log(`Es mayor de edad: ${mayoria}`);


/***** Mapas ******/

// const data = new Map();

// data.set('nombre', 'david');
// data.set('edad', 36);
// data.set(1, 'davidzapata56@gmail.com');
// data.set('movil', 9999999);

// console.log(data.get('nombre'));
// console.log(data.size);

// //data.delete(1);

// data.forEach((value, key) => {
//     console.log(`${key} : ${value}`);
// });

/******  Spread OIperator  ******/

var suma = function(a,b,c,d){
    return a+b+c+d;
}

var ope1 = suma(10,20,30,40);
console.log(ope1);

//ES6
var valores = [10,20,30,40];
const ope2 = suma(...valores);
console.log(ope2);

const rrhh = ['pedro', 'pablo', 'ana'];
const contabiolidad = ['felipe','carlos','maria'];

const empresa = [...rrhh, ...contabiolidad];
console.log(empresa);



