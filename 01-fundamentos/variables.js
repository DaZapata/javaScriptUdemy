/**VARIABLES

Numericos
enteros, decimales y de coma flotante

String
Secuencia de caracteres

Boolean
True o false

undefined
Tipos de datos no definidos

null
Datos que no existen
***/

//VARIABLES
var primerNombre = "David"
console.log(primerNombre)

var edad = 34
console.log(edad)

var sueldo = 1900.00
console.log(sueldo)

var tienetrabajo = true
console.log(tienetrabajo)

var puestoDetrabajo
console.log(puestoDetrabajo)

tienetrabajo = null
console.log(tienetrabajo)


//CONVERSION DE VARIABLES

//conversion de Tipos

var primerNombre, edad, sexo;
primerNombre = "David";
edad = 34;
sexo = "M";

console.log("El nombre es: " + primerNombre + " su edad es: " + edad);


//Operadores
//Matematicos 

var edadDavid, edadJero, sumaEdades, diferenciaEdad, yearActual, yearDavid, yearJero

edadDavid = 34
edadJero = 7
yearActual = 2021

diferenciaEdad = edadDavid-edadJero
sumaEdades = edadDavid+edadJero

yearDavid = yearActual - edadDavid
yearJero = yearActual - edadJero
console.log(diferenciaEdad)
console.log("Las edades suman: " + sumaEdades)
console.log("Año en que nacio David " + yearDavid)
console.log("Año en que nacio Jero " + yearJero)

//Operadores Logicos

var mayorDavid = edadDavid > edadJero;
console.log(mayorDavid)

//Operador typeof

console.log(typeof(yearActual))

//Operadores unarios aritmeticos
//++incremento
//--decremento

var edadCarmen = 18
var edadMaria = 14

++edadCarmen
console.log(edadCarmen)


//Operadores de asignacion
var a  = 5
var b = 12

a += b
console.log(a)
a -= b
a *= b

c = b % a
console.log(c)





