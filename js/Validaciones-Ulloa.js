let cont = 0;
function validar(event) {
    // variable para retornar
    var valido = true;

    // obtencion de los elementos/ controles de formulario a validar
    var txtNombres = document.getElementById("nombres");
    var txtApellidos = document.getElementById("apellidos");
    var selectEstado = document.getElementById("estadoC");
    var radiosGenero = document.getElementsByName("genero");
    var chkSuscrip = document.getElementById("suscripcion1");
    var txtfecha = document.getElementById("fecha");
    var txtemail = document.getElementById("correo");
    var checkboxsSuscripcion = document.getElementsByClassName("sus");


    // expresiones regulares
    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // VALIDACIONES
    //validacion para nombres
    if (txtNombres.value === "") {
        valido = false;
        mensaje("Nombre es requerido", txtNombres);
    } else if (!letra.test(txtNombres.value)) {
        valido = false;
        mensaje("Nombre solo debe contener letras", txtNombres);
    } else if (txtNombres.value.length > 20) {
        valido = false;
        mensaje("Nombre maximo 20 caracteres", txtNombres);
    }
    // lo mismo para apellidos
    if (txtApellidos.value === "") {
        valido = false;
        mensaje("Apellido es requerido", txtApellidos);
    } else if (!letra.test(txtApellidos.value)) {
        valido = false;
        mensaje("Apellido solo debe contener letras", txttxtApellidos);
    } else if (txtApellidos.value.length > 20) {
        valido = false;
        mensaje("Apellido maximo 20 caracteres", txttxtApellidos);
    }


    //validacion email
    if (txtemail.value === "") {
        valido = false;
        mensaje("Email es requerido", txtemail);
    } else if (!correo.test(txtemail.value)) {
        valido = false;
        mensaje("Email no es correcto", txtemail);
    }
    //validacion radio button
    let sel = false;
    for (let i = 0; i < radiosGenero.length; i++) {
        if (radiosGenero[i].checked) {
            sel = true;
            let res = radiosGenero[i].value;  // obtener el value        
            break;
        }
    }
    if (!sel) {
        valido = false;
        mensaje("Debe seleccionar un genero", radiosGenero[0]);
    }


    //validacion select
    if (selectEstado.value === null || selectEstado.value === '0') {
        valido = false;
        mensaje("Debe seleccionar estado civil", selectEstado);

    }
    //hasta qui
    
    //validacion de un checkbox

    //validacion de varios checkbox
    sel = false;
    for (let i = 0; i < checkboxsSuscripcion.length; i++) {
        if (checkboxsSuscripcion[i].checked) {
            cont++;
            sel = true;
            if (checkboxsSuscripcion[i].value === '2') {
                alert("Ha seleccionado Pulido de marmol");
            }
            break;
        }
    }
    if (!sel) {
        valido = false;
        mensaje("Debe seleccionar un servicio de limpieza", checkboxsSuscripcion[0]);
    }
    if (cont < 2) {
        valido = false;
        mensaje("Debe seleccionar al menos dos servicios de limpieza", checkboxsSuscripcion[0]);
    }

    // validacion de fecha
    var dato = txtfecha.value;
    var fechaN = new Date(dato);
    var anioN = fechaN.getFullYear();

    var fechaActual = new Date();// fecha actual
    var anioA = fechaActual.getFullYear();
    if (fechaN > fechaActual) {
        valido = false;
        mensaje("Fecha no puede ser superior a la actual", txtfecha);
    } else if (anioN < 1930) {
        valido = false;
        mensaje("Anio de nacimiento no puede ser menor a 1930", txtfecha);
    } else if ((anioA - anioN) < 18) {
        valido = false;
        mensaje("debe ser mayor de 18 años", txtfecha);
    }



    return valido;
}

function mensaje(cadenaMensaje, elemento) {
    window.alert(cadenaMensaje);
    elemento.focus();

}


function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }

}

