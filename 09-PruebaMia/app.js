function age(yearNacimi) {
  var ano = 2021 - yearNacimi;
  return ano;
}

var year = age(1987);

console.log(year);

var mes = year;

console.log("---------SWITCH----------");
switch (mes) {
  case 1:
    console.log("guaracha");
    break;
  case 34:
    console.log("vallenato");
    break;
  case 3:
    console.log("rock");
    break;
  default:
    break;
}
console.log("--------FOR--------");
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i == 6) {
    break;
  }
}
console.log("-----WHILE------");
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
console.log("-------DOWHILE--------");
var s = 0;
do {
  console.log(s);
  s++;
} while (s < 10);

console.log("---------ARRAY--------");
var nombres = ["david", "maria", "jeronimo", "chanel", "pepe"];

for (var i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

console.log("--------OBJETOS---------");
console.log("--------uno solo---------");

var zapata = {
  nombre: "david",
  apellido: "zapata",
  edad: 34,
  rol: "padre",
};

console.log(zapata.nombre);
console.log(
  "Este man se llama " + zapata.nombre + " y su apellido es " + zapata.apellido
);

console.log("--------LISTA DE OBJETOS---------");
const zapatas = [
  {
    nombre: "david",
    apellido: "zapata",
    edad: 34,
    rol: "padre",
  },
  {
    nombre: "maria",
    apellido: "arango",
    edad: 31,
    rol: "madre",
  },
  {
    nombre: "jeronimo",
    apellido: "zapata",
    edad: 7,
    rol: "hijo",
  },
  {
    nombre: "chanel",
    apellido: "zapata",
    edad: 3,
    rol: "mascota",
  },
];

console.log(zapatas);

for (i = 0; i < zapatas.length; i++) {
  console.log(zapatas[i]);
}

console.log("-------despues del push----------");
zapatas.push({
  nombre: "pepe",
  apellido: "osorio",
  edad: 27,
  rol: "amigo",
});

//console.log(zapatas);

for (i = 0; i < zapatas.length; i++) {
  console.log(zapatas[i]);
}

console.log(zapatas[3]);

var familia = new Object();
familia.nombre = "dennis";
familia.apellido = "lopez";
familia.edad = 22;
familia.rol = "tio";



const doctor = {
    nombre: "emilio",
    apellido: "arango",
    edad: 45,
    rol: "medico",
    saluda: function(){
        return 'hola soy ' + this.apellido + ' y tengo ' + this.edad + ' años';  
    }
}
console.log(familia)

//console.log(doctor)
console.log(doctor.saluda())
