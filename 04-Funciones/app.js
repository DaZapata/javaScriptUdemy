function bienvenido() {
    return 'Hola bienvenido a la seccion de funciones'
}

var mensaje = bienvenido()
console.log(mensaje)

//Partes de una funcion
//entradas(argumento), codigo, salida(return)

function cuadradoNumero(teta) {
    var resultado = teta * teta;
    return resultado;
}

var numero = 3;
var valor = cuadradoNumero(numero);
console.log(valor)
console.log(cuadradoNumero(5))

function calcularEdad(yearNacimiento) {
    return 2021 - yearNacimiento
}


function convertirFaCelcius(gradoFa) {
    var celcius = (gradoFa - 32)* 5 / 9;
    return celcius
}

var tempUno = convertirFaCelcius(55)
console.log(tempUno)

console.log('////////**********/////////')

var jubilacion = 65;

function calcularTiempoJubilacion(name, yearNacimiento) {
    var edad = calcularEdad(yearNacimiento)
    var yearJubilacion = jubilacion - edad
    console.log('A ' + name + ' le faltan ' + yearJubilacion + ' para jubilarse')
}

calcularTiempoJubilacion('David', 1987)

console.log('////////**********/////////')
//funciones como expresiones

//Argumentos undefined
var nombre;
var prueba = function (n) {
    return 'hola ' + n
}

nombre = 'pedro'
console.log(prueba(nombre))

console.log('////////**********/////////')
//Argumentos nulos

var a;
a = null;
var valorNulo = function (a) {
    return a
}
console.log(valorNulo(a))

console.log('////////**********/////////')
//Argumentos por default

var sumar = function (a = 3, b = 7) {
    return a + b
}

console.log(sumar())

console.log('////////**********/////////')

//Plantillas de cadenas (template string)
var nombre = 'Pablo'
console.log(`El nombre es: ${nombre}`)

var a = 5
var b = 10

console.log(`La suma es: ${a+b}`)

