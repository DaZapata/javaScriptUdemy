// ///local storage y sesion storage///

// //localStorage: permanecen guardados los datos, se guarda en un string con clave y valor

// //sesionStorage: al cerrar el navegador se eliminan los datos

// //localstorage
// localStorage.setItem('nombreUsuario', 'David')
// console.log(localStorage.getItem('nombreUsuario'));

// //eliminar datos del localstorage////
// localStorage.removeItem('nombreUsuario');

// //limpiar todo lo que hay en el local storage
// localStorage.clear();


///notacion json///
const usuario = {
    nombre: 'David',
    edad: 36
}

//aqui se convierte el objeto a string
const usuarioJSON = JSON.stringify(usuario)
localStorage.setItem('usuario', usuarioJSON);
console.log(usuarioJSON);

//para devolverlo de string a objeto se hace asi
const usuario2 = JSON.parse(usuarioJSON);
console.log(usuario2);