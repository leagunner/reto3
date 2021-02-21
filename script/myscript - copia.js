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
let logoElectronica = document.getElementById('logo-electronica')
let logoLacteos = document.getElementById('logo-lacteos')
let logoVerduras = document.getElementById('logo-verduras')
let logoViberes = document.getElementById('logo-viberes')
let descripcion = document.getElementById('exampleFormControlTextarea1')

//Ocultar texto, fantasma triste, mostrar boton "+" despues de pulsar "añadir, agregar imagenes segun la eleccion de la lista  agregar el titulo escrito por el usuario y chulardi" 

botonAñadir.addEventListener('click', function(){  //Añadiendo funcion al boton
    botonAdd.style.display = 'block' //haciendo aparecer al boton
    contenedorBorrable.style.display = 'none' //desapareciendo al popup
    contenedorPopUp.style.display = 'none' //desapareciendo el parrafo y el fantasmita
    contenedorListado.style.display = 'block'

    if(tipoProducto.value == 'viberes'){ //comprobando el valor de la seleccion del tipo de producto
        let tituloProducto = `${nombreProducto.value}`
        let modelo = `<li class="list group item"><img src="images/viberes.png" alt="Viberes" id="logos"> <h4>${tituloProducto}</h4><a href="#" id="chulardi" ><img src="images/chulardi.png" alt="Chulote"></a></li>` //agregando elemento a lista + link+ imagen+ titulo del producto hecho por el usuario + chulito
        contenedorListado.innerHTML += modelo
        
        let chulardiBoton = document.getElementById('chulardi') 
        chulardiBoton.addEventListener('click',function(){  //Aplicandole la funcion de desaparecer el listado para ver los detalles
            contenedorListado.style.display = 'none'
            let contenedorDetalles = document.getElementById('contenedor-detalles')
            contenedorDetalles.style.display = 'block' //Mostrando el contenedor de los detalles
            botonAdd.style.display = 'none'
            contenedorDetalles.innerHTML = `<li class="list group item"><img src="images/viberes.png" alt="Viberes" id="logos"> <h1>${tituloProducto}</h1><a href="#"<a href="#"id="logo-cierre-detalles"><img src="images/cerrar.png" alt="cerrar"></a></li>`
            let cerrarDetalles = document.getElementById('logo-cierre-detalles') // boton de cerrar detalles
            cerrarDetalles.addEventListener('click', function(){
                contenedorDetalles.style.display = 'none'
                contenedorListado.style.display = 'block'
                botonAdd.style.display = 'block'
})
        })
        }
    else if (tipoProducto.value == 2){
        let tituloProducto = `${nombreProducto.value}`
        let modelo = `<li class="list group item"><img src="images/lacteos.png" alt="Viberes" id="logos"> <h4>${tituloProducto}</h4><a href="#" id="chulardi"><img src="images/chulardi.png" alt="Chulote"></a></li>`
        contenedorListado.innerHTML += modelo
        }
    else if (tipoProducto.value == 3){
        let tituloProducto = `${nombreProducto.value}`
        contenedorListado.innerHTML += `<li class="list group item"><img src="images/verduras.png" alt="Verduras" id="logos"> <h4>${tituloProducto}</h4><a href="#" id="chulardi"><img src="images/chulardi.png" alt="Chulote"></a></li>`
        }
    else if (tipoProducto.value == 4){
        let tituloProducto = `${nombreProducto.value}`
        contenedorListado.innerHTML += `<li class="list group item"><img src="images/electronica.png" alt="Electronica" id="logos"> <h4>${tituloProducto}</h4><a href="#" id="chulardi"><img src="images/chulardi.png" alt="Chulote"></a></li>`
        }}
)
//Validador de texto para botonera
let nombreProducto = document.getElementById('validationCustom01')
nombreProducto.addEventListener('keyup', function() {
    let valueDeTexto = nombreProducto.value.trim()
    botonAñadir.disabled = valueDeTexto == "" 
})

