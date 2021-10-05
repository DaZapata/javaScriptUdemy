//objetos literales
 var persona = {
     nombre: 'david',
     apellido: 'zapata',
     gustos: ['futbol', 'peliculas', 'ingles'],
     trabajo: 'analista',
     esCasado: true
 };
 
//  console.log(persona)
//  console.log(persona.esCasado)
 
 //objetos con la sintaxis object
 var persona2 = new Object();
 persona2.nombre = 'ana'
 persona2.apellido = 'perez'
 persona2.trabajo = 'webDelevoper'
 
//  console.log(persona2)
 
 //objetos y metodos
 
 var persona = {
     //propiedades
     nombre: 'david',
     apellido: 'zapata',
     gustos: ['futbol', 'peliculas', 'ingles'],
     trabajo: 'analista',
     esCasado: true,
     yearNacimiento: 1987,
     //metodos
     calcularEdad: function(){
         this.edad = 2021 - this.yearNacimiento
     }
 };

persona.calcularEdad()
console.log(persona)

