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

const getUsers = () => {
    setTimeout(() => {
        const userIds = [101, 102, 103, 105, 104]
        console.log(userIds);

        setTimeout((id) => {
            const user = {
                email: 'david@mail.com',
                name: 'david'
            }
            console.log(`${id} = ${user.email} - ${user.name}`);

            setTimeout((idPermiso) => {
                const permiso = ['admin', 'creador']
                console.log(permiso);
            }, 1500, userIds[1])
        }, 1500, userIds[1])
    }, 1500)
}

getUsers()