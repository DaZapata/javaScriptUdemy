// function Name(name) {
//     return name
// }

// console.log('Probando la funcion Name');

// console.log(Name('David'));

// const daysWeek = [
//   "lunes",
//   "martes",
//   "miercoles",
//   "jueves",
//   "viernes",
//   "sabado",
//   "domingo",
// ];

// daysWeek.forEach((element) => {
//   console.log(element);
// });

// const found = daysWeek.find((element) => element.includes("eves"));
// console.log(found);

// var dayWeek = prompt("Cual es tu dia se la semana preferido?").toLowerCase();

// function CheckDay(day) {
//   switch (day) {
//     case "lunes":
//       return "perezoso";
//       break;
//     case "martes":
//       return "abrumador";
//       break;
//     case "miercoles":
//       return "moral";
//       break;
//     case "jueves":
//       return "espectante";
//       break;
//     case "viernes":
//       return "alegria";
//       break;
//     case "sabado":
//       return "coronamos";
//       break;
//     default:
//       "probando";
//       break;
//   }
// }

// console.log(CheckDay(dayWeek));

// var response = CheckDay(dayWeek);
// listEmotions.push(response);
// console.log(response);

let hijo = {
  name: 'Jeronimo',
  lastName: 'Zapata',
  age: 8,
  estudia: true,
  hobbies: {
    futbol: [2019, 2020, 2021],
    bicicle: true,
    swimming: true,
    videoGames: true,
    books: false,
    playGuitar: false,
    dance: false
  }

}

// const found = hijo.hobbies.find(e => e == 'futbol');
// console.log(found);

// hijo.hobbies.push('swimming')
// hijo.hobbies[1] = 'videoGames'
// console.log(hijo.hobbies);

console.log(hijo);
let sumaYears = hijo.hobbies.futbol.reduce((previous, current) =>{
  return previous + current
})
console.log(sumaYears);

function cuadrado(num){
  if (num * num > 20){
    return 'es mayor que 20'
  }
}
console.log(cuadrado(5));

const cuadradoF = (num) => {
  if (num * num > 20) {
    return 'es mayor que 20';
  }
};

//const cuadradoFlecha = (num) => num * num;
console.log(cuadradoF(5));