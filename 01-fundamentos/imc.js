var pesoDavid = 77;
var alturaDavid = 1.78

var pesoJero = 17;
var alturaJero = 1.12

var imcDavid = pesoDavid/(alturaDavid*alturaDavid)
console.log("Imc David: " + imcDavid)

var imcJero = pesoJero/(alturaJero*alturaJero)
console.log("Imc Jero: " + imcJero)

if (imcDavid > imcJero){
    console.log("David tiene mas imc")
} else {
    console.log("Jeronimo tiene mas imc")
}