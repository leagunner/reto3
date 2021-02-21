//------------------------------La magia de BootStrap-------------------------------------
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
        })
    })()
//-------------------------------------------------------------------------------------------

//Mostrar selector de productos y ocultar el boton "+"
let botonAdd = document.getElementById('boton-add')
let contenedorPopUp = document.getElementById('contenedor-popup')

botonAdd.addEventListener('click',function(){
    contenedorPopUp.style.display = 'block'
    botonAdd.style.display = 'none'
    contenedorListado.style.display = 'none'
})

//boton de cerrar que se usa para todos "X"
let cerrar = document.getElementById('logo-cierre')
cerrar.addEventListener('click', function(){
    contenedorPopUp.style.display = 'none'
    botonAdd.style.display = 'block'
    contenedorListado.style.display = 'block'
})

//ay dios mio arrancando motores para lo de mas abajito
let contenedorBorrable = document.getElementById('contenedor-borrable')
let botonAñadir = document.getElementById('boton-añadir')
let contenedorListado = document.getElementById('contenedor-listado')
let tipoProducto = document.getElementById('validationCustom04')
let logoElectronica = `<img src="images/electronica.png" alt="">`
let logoLacteos = `<img src="images/lacteos.png" alt="">`
let logoVerduras = `<img src="images/verduras.png" alt="">`
let logoViberes = `<img src="images/viberes.png" alt=""">`
let contenedorDetalles = document.getElementById('contenedor-detalles')

let descripcion = document.getElementById('exampleFormControlTextarea1')

//Ocultar texto, fantasma triste, mostrar boton "+" despues de pulsar "añadir, agregar imagenes segun la eleccion de la lista  agregar el titulo escrito por el usuario y chulardi" 




//Validador de texto para botonera
let nombreProducto = document.getElementById('validationCustom01')
nombreProducto.addEventListener('keyup', function() {
    let valueDeTexto = nombreProducto.value.trim()
    botonAñadir.disabled = valueDeTexto == "" 
})

function verListaDetalles(){
    contenedorDetalles.style.display = 'block'
    contenedorDetalles.innerHTML = `<li class="list-group-item">${logoViberes}<h4>${tituloProducto}</h4></li>`
}

function añadirALista() { 
    let tituloProducto = nombreProducto.value
    let randomId = Math.floor(Math.random()* (1000 - 1)+ 1)
    let chulardi = `<a href="#" id="${randomId}"><img src="images/chulardi.png" alt=""></a>`
    contenedorListado.innerHTML += `<li class="list-group-item">${logoViberes}<h4>${tituloProducto}</h4> ${chulardi}</li>`
    let verListaDetallada = document.getElementById(`${randomId}`)
        verListaDetallada.addEventListener('click',verListaDetalles)

    botonAdd.style.display = 'block' //haciendo aparecer al boton
    contenedorBorrable.style.display = 'none' //desapareciendo al popup
    contenedorPopUp.style.display = 'none' //desapareciendo el parrafo y el fantasmita
    contenedorListado.style.display = 'block'
}
botonAñadir.addEventListener('click',añadirALista)

