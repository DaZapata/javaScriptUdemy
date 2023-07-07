// setTimeout(function(){
//     console.log('3 seg despues');
// }, 3000)

//funcion flecha


// const segundo = () => {
//     setTimeout(() => {
//         console.log('Inicio segundo');
//     }, 2000)
// }

// const primero = () => {
//     console.log('Inicio primero');
//     segundo();
//     console.log('Fin primero');
// }

// primero();

//setTimeOut
// const getUsers = () => {
//     setTimeout(() => {
//         const userIds = [101, 102, 103, 105, 104]
//         console.log(userIds);

//         setTimeout((id) => {
//             const user = {
//                 email: 'david@mail.com',
//                 name: 'david'
//             }
//             console.log(`${id} = ${user.email} - ${user.name}`);

//             setTimeout((idPermiso) => {
//                 const permiso = ['admin', 'creador']
//                 console.log(permiso);
//             }, 1500, userIds[1])
//         }, 1500, userIds[1])
//     }, 1500)
// }

// getUsers()

// //ejemplo promesas
// let promesa = new Promise((resolve, reject) => {
//     if (false){
//         resolve('todo salio bien')
//     } else {
//         reject('hubo un error')
//     }
// })

// promesa.then(response => {
//     console.log('Response:' + response);
// }).catch(error => {
//     console.log('Error:' + error);
// })

// //ejemplo 2
// var miPromesa = Promise.resolve('comida')
// miPromesa.then(resp => console.log(resp))

// //ejemplo 3
// var miPromesa2 = new Promise(function(resolve, reject){
//     setTimeout(() => resolve(4), 2000)
// })

// miPromesa2.then(resp => {
//     resp += 5
//     console.log(resp);
// })

// //De callbacks a promises
// const getUsersIds = new Promise((response, reject) => {
//     setTimeout(() => {
//         response([101, 102, 103, 105])
//     }, 1500)
// })

// const getUser = userId => {
//     return new Promise((resolve, reject) => {
//         setTimeout(id => {
//             const user = {
//                 email: 'david@mail.com',
//                 name: 'david'
//             }
//             resolve(`${id} = ${user.email} - ${user.name}`);
//         }, 1500, userId)
//     })
// }

// getPermisos = (id) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(id => {
//             const permiso = ['admin', 'creador']
//             resolve(permiso)
//         }, 1500, id)
//     })
// }

// getUsersIds
// .then(Ids => {
//     console.log((Ids));
//     return getUser(Ids[3])
// })
// .then(user => {
//     console.log(user);
//     return getPermisos(user.id)
// })
// .then(permisos => {
//     console.log(permisos);
// })
// .catch(() => {
//     console.log('Error');
// })

//de promesas a async await

const getUsersIds = new Promise((response, reject) => {
    setTimeout(() => {
        response([101, 102, 103, 105])
    }, 1500)
})

const getUser = userId => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const user = {
                email: 'david@mail.com',
                name: 'david'
            }
            resolve(`${id} = ${user.email} - ${user.name}`);
        }, 1500, userId)
    })
}

getPermisos = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const permiso = ['admin', 'creador']
            resolve(permiso)
        }, 1500, id)
    })
}

//funcion con async await
async function getUsersAW(){
    const Ids = await getUsersIds
    console.log(Ids);
    const user = await getUser(Ids[2])
    console.log(user);
    const permisos = await getPermisos(user.id)
    console.log(permisos);

    return user
}

//getUsersAW().then(resultado => console.log(`${resultado} es un usuario`))

//ejemnplo llamada ajax HTMl Request

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4){
        const datos = JSON.parse(e.target.responseText)
        const datos1 = datos.results
        console.log(datos);
        console.log(datos1);
        datos1.forEach(function(elemento) {
            if (elemento.id === 1) {
              console.log(elemento.name);
            }
        })
    }
})
request.open('GET','https://rickandmortyapi.com/api/character')
request.send()