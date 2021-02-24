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
document.addEventListener('click',function(e){
    console.log(e.getAttribute)
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
let nombreProducto = document.getElementById('validationCustom01')
//Ocultar texto, fantasma triste, mostrar boton "+" despues de pulsar "añadir, agregar imagenes segun la eleccion de la lista  agregar el titulo escrito por el usuario y chulardi" 

botonAñadir.addEventListener('click', function(){  //Añadiendo funcion al boton
    botonAdd.style.display = 'block' //haciendo aparecer al boton
    contenedorBorrable.style.display = 'none' //desapareciendo al popup
    contenedorPopUp.style.display = 'none' //desapareciendo el parrafo y el fantasmita
    contenedorListado.style.display = 'block'

    if(tipoProducto.value == 1){ //comprobando el valor de la seleccion del tipo de producto
        let tituloProducto = `${nombreProducto.value}`
        let detallesProducto = `${descripcion.value}`
        

        let modelo = `<li class="list group item"><img src="images/viberes.png" alt="Viberes" id="logos"> <h4>${tituloProducto}</h4><a href="#" id="chulardi" ><img src="images/chulardi.png" alt="Chulote"></a></li>` //agregando elemento a lista + link+ imagen+ titulo del producto hecho por el usuario + chulito
        contenedorListado.innerHTML += modelo

        document.addEventListener('click',function(e){
            if (e.target.className == "chulito"){                
                contenedorListado.style.display = 'none'
                let contenedorDetalles = document.getElementById('contenedor-detalles')
                contenedorDetalles.style.display = 'block' //Mostrando el contenedor de los detalles
                botonAdd.style.display = 'none'
                document.getElementById("imagen-detalles").src = e.target.getAttribute("atributo-imagen")
                document.getElementById("h1-detalles").innerHTML = e.target.getAttribute("atributo-nombre")
                document.getElementById("p-detalles").innerHTML = e.target.getAttribute("atributo-detalles")
                document.getElementById('logo-cierre-detalles').addEventListener('click', function(){
                    contenedorDetalles.style.display = 'none'
                    contenedorListado.style.display = 'block'
                    botonAdd.style.display = 'block'
    })}})}})
//Validador de texto para botonera
nombreProducto.addEventListener('keyup', function() {
    let valueDeTexto = nombreProducto.value.trim()
    botonAñadir.disabled = valueDeTexto == "" 
})
