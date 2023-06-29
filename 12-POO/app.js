/***** Manejo de clases en JS ****/

class Persona{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }
}

const persona1 = new Persona('david', 36);
const persona2 = new Persona('maria', 32);
const persona3 = new Persona('jero', 8);

console.log(persona1.nombre);
console.log(persona2.nombre);
console.log(persona3.nombre);