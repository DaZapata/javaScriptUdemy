//examinando el DOM

// console.dir(document)

// console.log(document.URL)
// console.log(document.title)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all[11])
// console.log(document.forms[0])

//getElementById
// console.log(document.getElementById('header-title'))

// //getElementsByClassName
// var items = document.getElementsByClassName('list-group-item')
// console.log(items[3])
// items[0].textContent = 'prueba'

// //getElementsByTagName
// var itemss = document.getElementsByTagName('li')
// itemss[2].textContent = 'prueba02'

// //querySelector
// //consula selector, permite seleccionar el primer elemento de acuerdo a un parametro que le vamos a enviar
// var header = document.querySelector('#main-header')
// header.style.border = 'solid 4px #000'

// var input = document.querySelector('input')
// console.log(input)
// input.value = 'hola mundo'

// var submit = document.querySelector('input[type="submit"]')
// submit.value = "Send"

// var item = document.querySelector('.list-group-item')
// item.style.color = 'red'

//qerySelectorAll

// var items = document.querySelectorAll('.list-group-item');
// items[2].style.color = 'red';

// var titulos = document.querySelectorAll('.title');
// console.log(titulos);

// var impar = document.querySelectorAll('li:nth-child(odd)');
// for (var i=0; i < impar.length; i++){
//     impar[i].style.backgroundColor = '#ccc';
// }

// //parentNode
// //trae el padre de el elemento de HTML
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);

// //parentElement
// var itemListe = document.querySelector('#items');
// console.log(itemListe.parentElement);

// //children
// //trae los hijos del elemento de HTML
// console.log(itemList.children);

// //previousSibling
// console.log(itemList.previousSibling);

// //createElement
// //para cerar elementos se envia como parametro el getElementsByTagName
// var nuevoDiv = document.createElement('div');
// nuevoDiv.className = 'hola';
// nuevoDiv.id = 'div-hola';
// nuevoDiv.setAttribute('title','hola mundo');

// //createTextNode
// var nuevoNodeText = document.createTextNode('hola world');
// nuevoDiv.appendChild(nuevoNodeText);
// console.log(nuevoDiv);

//agregar eventos

// document.getElementById('boton').addEventListener('click', function(){
//     console.log('click2');
// });

// document.getElementById('boton').addEventListener('click', hacerClick);

// function hacerClick(){
//     //console.log('usted hizo click')
//     document.getElementById('header-title').textContent = 'Texto cambiado';
// }

//agregar un elemento a la lista

//capturamos el formulario y la liista ya que los necesitamos para lo que queremos hacer que es agregar un item nuevo
var form = document.getElementById("formAgregar");
var lista = document.getElementById("items");
var filtro = document.getElementById("filtro");

//agrgamos el evento submit que recibira como parametro una funcion
form.addEventListener("submit", agregarItem);

//agregamos el evento click de la lista para eliminar items
lista.addEventListener("click", eliminarItem);

//agregamos el evento del teclado para buscar items en el buscador
filtro.addEventListener("keyup", filtrarItems);

//creamos la funcion que agrega items, evento submit del formulario
function agregarItem(e) {
  e.preventDefault();

  //capturamos el texto que se ingresa en el campo de ingresar
  var newItem = document.getElementById("item").value;

  //creamos un nuevo item de tipo li
  var li = document.createElement("li");
  //le agregamos una clase al item nuevo
  li.className = "list-group-item";
  //agregamos un nodo hijo que contiene el nuevo item
  li.appendChild(document.createTextNode(newItem));

  //creamos un boton para eliminar como los demas items
  var botonDel = document.createElement("button");
  //agregamos la clase de bootstrap al nuevo boton
  botonDel.className = "btn btn-danger btn-sm float-right eliminar";
  //agregamos nodo hijo al boton, en este caso en la letra X
  botonDel.appendChild(document.createTextNode("X"));
  //le agregamos al nuevo item el boton
  li.appendChild(botonDel);
  // agregamos lo que acabamos de crear a la lista existente
  lista.appendChild(li);
}

//funcion para eliminar un item de la lista
function eliminarItem(e) {
  // si la clase contiene la palabra eliminar lo elimina
  if (e.target.classList.contains("eliminar")) {
    //se crea una advertencia preguntando si desea eliminar o no
    if (confirm("Seguro que desea eliminar el elemento?")) {
      //se captura el elemento padre del boton de eliminar, osea el item completo
      var li = e.target.parentElement;
      //se elimina el item de la lista
      lista.removeChild(li);
    }
  }
}

//funcion para filtrar elementos de la lista
function filtrarItems(e) {
  //traemos el target del evento y lo convertimos en minusculas
  var texto = e.target.value.toLowerCase();
  //capturamos los items
  var items = lista.getElementsByTagName("li");
  //convertimos el collectione en un array para poder recorrerlo y hacer comparaciones
  //array desde items, lo recorro con for each y cada que recorra llame una funcion y a esa funcion le envie el item que captura por cada iteracion
  Array.from(items).forEach(function (item) {
    //capturamos el contenido del primer hijo del item
    var itemNombre = item.firstChild.textContent;
    if (itemNombre.toLowerCase().indexOf(texto) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

//console.log(document.getElementById("main-header"));
//var header = document.getElementById("main-header");
//console.log(header);

//header.textContent = 'Holaaaas'

//AGREGAR eventos

//-- accedemos al document para obtener el id del boton, le ponemos que escuche con addevent... seguidamente que escuche el 'click', y que ejecute una funcion la cual esta en la segunda liena
document.getElementById("boton").addEventListener("click", function () {
  console.log("click2");
});

//--aca con el mismo boton cambiamos el texto de del titulo del header
// document.getElementById('boton').addEventListener('click', function2);

// function function2() {
//   document.getElementById('header-title').textContent = "Texto cambiado"
// }