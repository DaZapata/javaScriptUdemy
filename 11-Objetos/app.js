// let miLibroA = {
//     titulo: 'El libro de JavaScript',
//     autor: 'David Zapata',
//     paginas: 400,
//     publicado: false
// }

// let miLibroB = {
//     titulo: 'El libro de Python',
//     autor: 'Jero Zapata',
//     paginas: 700,
//     publicado: true
// }

// // console.log(miLibro.titulo);
// // console.log(`El libro se llama ${miLibro.titulo} el autor es ${miLibro.autor}`);
// // miLibro.paginas = 500;

// let getResumen = (libro) => {
//     return {
//         resumen: `El libro se llama ${libro.titulo} el autor es ${libro.autor}`,
//         resumenPaginas: `${libro.titulo} tiene ${libro.paginas} paginas`
//     }
// }

// let libroAResumen = getResumen(miLibroA);
// let libroBResumen = getResumen(miLibroB);

// console.log(libroAResumen.resumen);
// console.log(libroAResumen.resumenPaginas);

// console.log(libroBResumen.resumen);
// console.log(libroBResumen.resumenPaginas);


// let persona = {
//     nomre: 'jero',
//     edad: 30,
//     ciudad: 'medellin'
// }

// console.log(persona);

/*****  Referencia de objetos  ******/

// let persona = {
//     nombre: 'pablo',
//     edad: 30,
//     sueldo: 1200
// }

// let cambiarsueldo = (persona, monto) => {
//     persona.sueldo = persona.sueldo + monto;
//     console.log(persona);
// }

// console.log(persona);

/**** Metodos en objetos *****/

// let persona = {
//     nombre: 'pablo',
//     edad: 30,
//     sueldo: 1200,
//     metodoPrueba: function() {
//         console.log('escribiendo desde objeto');
//     },
//     cambiarEdad: function(e) {
//         this.edad = this.edad + e;
//     }
// }
// persona.metodoPrueba();
// persona.cambiarEdad(6);
// console.log(persona);

/**** Objeto String *****/

// let nombre = 'David Zapata';
// let clave = '1234Clave.34e';


// console.log(nombre.length);
// console.log(nombre.toUpperCase());
// console.log(nombre.toLowerCase());
// console.log(clave.includes('Clave'));

/**** Destructuracion de objetos ****/

// const respuesta = {
//     codigo: 200,
//     data: {
//         persona: {
//             nombre: 'pablo',
//             direccion: {
//                 ciudad: 'lima',
//                 pais: 'peru'
//             }                    
//         }
//     }
// }

// let {codigo: status, data : {persona : {nombre}}} = respuesta;

// console.log(nombre);

const getPersonaDatos = () =>{
    const respuesta = [
        {
            codigo: 200,
            data: {
                persona: {
                    nombre: 'pablo',
                    direccion: {
                        ciudad: 'lima',
                        pais: 'peru'
                    }                    
                }
            }
        },
        {
            codigo: 300,
            data: {
                persona: {
                    nombre: 'luis',
                    direccion: {
                        ciudad: 'santiango',
                        pais: 'chile'
                    }                    
                }
            }
        },
        {
            codigo: 400,
            data: {
                persona: {
                    nombre: 'ana',
                    direccion: {
                        ciudad: 'cali',
                        pais: 'colombia'
                    }                    
                }
            }
        }
    ]
    return respuesta;
}

for ( const {codigo: status, data:{persona:{nombre:nom}}} of getPersonaDatos()){
    console.log(nom);
}




