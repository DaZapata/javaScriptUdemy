// ---ES5 variables-----
var nombre5 = "David Zapata";
var edad = 35;
console.log("El nombre es " + nombre5);

// ----ES6 variables----
// las variables declaradas con let se pueden mutar, las const son constantes y no lo permites
const nombre6 = "pedro";
//let edad6 = 6;
//console.log("El nombre es " + nombre6 + " y la edad es " + edad6);

//----bloques y alcance de las variables----
var test;
test = 10;
function prueba() {
  test = 15;
}

prueba();
console.log(test);

// aca solo se imprime la variable var
// {
//   let name = 'pipe';
//   const edad7 = 23;
//   var char = 'c';
// }

// console.log(edad7);

// template strings

let nombre8 = "pablo";
let apellido = "gomez";
let year = 1987;

function calcularEdad(year) {
  return 2021 - year;
}

// ES5
console.log(
  "Tu nombre es " +
    nombre8 +
    " " +
    apellido +
    " y su edad es " +
    calcularEdad(year)
);

// ES6
console.log(
  `Tu nombre es ${nombre8} ${apellido} y tienes ${calcularEdad(year)} años`
);

// FUNCIONES DE CADENAS ES6
let nombreCompleto = `${nombre8} ${apellido}`;
console.log(nombreCompleto);

// repetir una cadena de texto
console.log(`${nombre8} `.repeat(5));

// mirar si la cadena tiene un texto cualquiera que le pasamos por parametros
console.log(nombreCompleto.includes("blo"));

// mirar si el string comienza con lo que le enviamos por parametros
console.log(nombreCompleto.startsWith("pa"));

// mirar si el string termina con lo que le mandamos por parametros
console.log(nombreCompleto.endsWith("sa"));

// -- funciones flecha --

const years = [2000, 2005, 2008, 2012];

// ES5
var edad5 = years.map(function (el) {
  return 2019 - el;
});

console.log(edad5);

// ES6 funciones flecha
let edad6 = years.map((el) => 2019 - el);
console.log(edad6);

edad6 = years.map((el, index) => `Edad ${index + 1}: ${2019 - el}`);
console.log(edad6);

edad6 = years.map(
  (el, index) => {
    const yearActual = new Date().getFullYear();
    const edad = yearActual - el;
    return `Edad ${index + 1}: ${edad}`;
  }
);
console.log(edad6);


// -- funcion normal ---
function cuadrado(num){
  return num * num
}
console.log(cuadrado(5));

// funcion flecha
const cuadradoF = (num) => num * num;
console.log(cuadradoF(6));

const personas = [
  {
    nombre: 'david',
    edad: 34
  }, 
  {
    nombre: 'maria',
    edad: 31
  },
  {
    nombre: 'jeronimo',
    edad: 7
  },
  {
    nombre: 'chanel',
    edad: 3
  }
];

//-- funcion normal--
const menores30 = personas.filter(function(personas){
  return personas.edad < 30;
});
console.log(menores30);

// --funcion flecha --

const menores25 = personas.filter((persona) => persona.edad < 25);
console.log(menores25);

// -- destructuracion --

// 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 token github