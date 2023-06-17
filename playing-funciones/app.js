// function Name(name) {
//     return name
// }

// console.log('Probando la funcion Name');

// console.log(Name('David'));

const daysWeek = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

daysWeek.forEach((element) => {
  console.log(element);
});

const found = daysWeek.find((element) => element.includes("eves"));
console.log(found);

//var dayWeek = prompt("Cual es tu dia se la semana preferido?").toLowerCase();

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

// var response = CheckDay(dayWeek);
// listEmotions.push(response);
// console.log(response);
