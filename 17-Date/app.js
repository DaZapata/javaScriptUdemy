// //fechas y hora
// //01 enero 1970 00:00:00 - estndar de zona horaria
// const ahora = new Date();
// console.log(ahora);
// const timeStamp = ahora.getTime();
// console.log(timeStamp);

// const miFechaActual = new Date(timeStamp);
// console.log(miFechaActual.getFullYear());

// const fecha1 = new Date("December 17, 1997 06:20:00");
// console.log(fecha1.toString());

// console.log(`Ano: ${ahora.getFullYear()}`);
// console.log(`Mes: ${ahora.getMonth() + 1}`);
// console.log(`Dia: ${ahora.getDate()}`);
// console.log(`Hora: ${ahora.getHours()}`);
// console.log(`Minutos: ${ahora.getMinutes()}`);
// console.log(`Segundos: ${ahora.getSeconds()}`);

///ejercicio

//crear 2 objetos date y comparar ccual es menor

const fechaJero = new Date("August 14, 2014 13:30:00")
console.log(fechaJero);
const timeSpan = fechaJero.getTime()
console.log(timeSpan);

const fechaDavid = new Date("March 10, 1987 00:30:00")
console.log(fechaDavid);
const timeSpan2 = fechaDavid.getTime()
console.log(timeSpan2);

if (timeSpan > timeSpan2){
    console.log('Jero es mayor');
} else {
    console.log('David es mayor');
}