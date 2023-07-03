/***** Manejo de clases en JS ****/

class Persona{
    constructor(nombre, edad, profesiones = []){
        this.nombre=nombre;
        this.edad=edad;
        this.profesiones=profesiones;
    }

    getBiografia(){
        let biografia = `${this.nombre}, tiene ${this.edad}. Trabajo: `;

        this.profesiones.forEach((profesion) => {
            biografia += `${profesion}, `;
        })

        return biografia
    }
}

//sub clase que hereda
class Empleado extends Persona{
    constructor(nombre, edad, profesiones=[], sueldo, puesto){
        //hay que llamar a super y traer el constructor de la clase padre
        super(nombre, edad, profesiones);
        this.sueldo=sueldo;
        this.puesto=puesto;
    }

    //vamos a redefinir el metodo getbiografia
    getBiografia(){
        return super.getBiografia() + `Puesto: ${this.puesto}, Salario ${this.sueldo}`;
    }

    set sueldo(monto){
        this._sueldo=monto
    }
    get sueldo(){
        return this._sueldo
    }
}


// const persona1 = new Persona('david', 36, ['ingeniero', 'electromecanico']);
// const persona2 = new Persona('maria', 32, ['comunicadora', 'chef']);
// const persona3 = new Persona('jero', 8, ['estudiante']);

const persona2 = new Empleado('maria', 32, ['comunicadora', 'chef'], 1500, 'Gerente');
const persona3 = new Empleado('jero', 8, ['estudiante'], 1000, 'RRHH');
const persona1 = new Empleado('david', 36, ['ingeniero', 'electromecanico'], 3000, 'CEO');

persona1.sueldo=3000
console.log(persona1.getBiografia());
console.log(persona2.getBiografia());
console.log(persona3.getBiografia());


////***** Get y SET *******/
const datos = {
    
    get ubicacion(){
        return this._ubicacion
    },
    set ubicacion(valor){
        this._ubicacion =valor
    }
}

datos.ubicacion='Buenos aires'
console.log(datos.ubicacion);
console.log(datos);