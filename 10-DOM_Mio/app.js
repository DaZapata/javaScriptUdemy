var nuevoDiv = document.createElement('div')
nuevoDiv.className = 'hola'
nuevoDiv.id = 'div-hola'
nuevoDiv.setAttribute('title', 'hola mundo')
nuevoDiv.appendChild(document.createTextNode('hello world'))
console.log(nuevoDiv)