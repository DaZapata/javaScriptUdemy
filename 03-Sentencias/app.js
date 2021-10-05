//if else
var nombre = "David";
var edad = 12;

if (edad < 12){
    console.log(nombre + " es un niño")
} else if ((edad > 11) && (edad < 18)){
    console.log(nombre + " es un joven")
} else if ((edad > 18) && (edad < 60)){
    console.log("Es un adulto")
} else {
    console.log("Es un anciano")
}

//Operador Ternario

var nombre = "Jero"
var edad = 19;

// es como un if else en una linea, mas bonito
edad >= 18 ? console.log(nombre + ' es mayor de edad') : console.log(nombre + ' es menos de edad');

//sentencia switch (key) {
var mes = 6;
  switch (mes) {
      case 1:
          console.log('Enero')
          break;
      case 2:
          console.log('Febrero')
          break;
      case 3:
          console.log('Marzo')
          break;
      case 4:
          console.log('Abril')
          break;
      default:
          console.log('Mes no existente')
          break;
  }

  // sentencia for
 for (let i = 0; i < 10; i++) {
     
     console.log(i)
     
 }

 //sentencia while
console.log('while')
 var i = 1
 while (i <= 10) {
     console.log(i)
     i++
 }

 //sentecia do while
console.log('dowhile')
 var s = 1;
do {
    console.log(s);
    s++;
} while (s <= 10);

//valores verdaderos y falsos
// se usa asi cuando se quiere preguntar si una variable esta definida

var age;

if (age) {
    console.log('variable definida')
} else {
    console.log('variable no definida')
}

//operadores de igualdad
if(edad == 10){
    console.log('variable con coersion')
}else{
    console.log('variable sin coersion')
}

//ejercicio

notasPablo = [14,8,16];
notasMaria = [12,18,10];
var sumaNotasPablo = 0;
var sumaNotasMaria = 0;

for (let i = 0; i < notasPablo.length; i++) {
    console.log('Notas de Pablo: ' + notasPablo[i]);
    sumaNotasPablo = sumaNotasPablo + notasPablo[i];
}
console.log('Total notas Pablo: ' + sumaNotasPablo);


for (let i = 0; i < notasMaria.length; i++) {
    console.log('Notas de Maria: ' + notasMaria[i]);
    sumaNotasMaria = sumaNotasMaria + notasMaria[i];
}
console.log('Total notas Maria: ' + sumaNotasMaria);

var promedioPablo = sumaNotasPablo / notasPablo.length;
console.log('Promedio Pablo: ' + promedioPablo.toPrecision(4));

var promedioMaria = sumaNotasMaria / notasMaria.length;
console.log('Promedio Maria: ' + promedioMaria.toPrecision(4));
console.log('//////*********///////')
var aprobado = 13;

if (promedioPablo > promedioMaria) {
    console.log('Pablo tiene el mayor promedio')
} else if (promedioMaria > promedioPablo) {
    console.log('Maria tiene el mayor promedio')
} else {
    console.log('Ambos tienen el mismo promedio')
}

if (promedioPablo > aprobado) {
    console.log('Pablo Aprobado')
} else {
    console.log('Pablo Reprobado')
}
if (promedioMaria > aprobado) {
    console.log('Maria Aprobada')
} else {
    console.log('Maria Reprobada')
}


