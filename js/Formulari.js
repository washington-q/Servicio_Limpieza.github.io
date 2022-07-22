/*<!-- Códgio Vanilla JS Modulo Formulario -->*/
    
        var Nombre, Descripcion, Precio, Categoria, Cantidad, Imagen, Boton;
        Nombre = document.getElementById("Nombre");
        Descripcion = document.getElementById("Descripcion");
        Precio = document.getElementById("Precio");
        Categoria = document.getElementById("Categoria");
        Cantidad = document.getElementById("Cantidad");
        Imagen = document.getElementById("img_formulario");
        Boton = document.getElementById("boton_login");
        var letra = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/i;
        var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var PrecioValidacion = /^\d*(\.\d{1})?\d{0,1}$/;
        var ImagenValidar = /\.(jpg|png|gif)$/i;
        var NumeroValidar = /^[0-9]+$/;
        Boton.onclick = function Validar() {
            limpiarMensajes();
            var bandera = true;
            if (Nombre.value === "") {
                mensaje("Nombre del producto es requerido 😟", Nombre);
                bandera = false;
            }
            else {
                if (!letra.test(Nombre.value)) {
                    mensaje("El nombre del producto solo debe llevar letras 😟", Nombre);
                    bandera = false;
                }
            }
            if (Descripcion.value === "") {
                mensaje("Descripción del producto es requerido 😑", Descripcion);
                bandera = false;
            }
            else {
                if (!letra.test(Descripcion.value)) {
                    mensaje("La descripción del producto solo debe llevar letras 😑", Descripcion);
                    bandera = false;
                }
            }
            if (Categoria.options[Categoria.selectedIndex].text == 'Seleccionar..') {
                bandera = false;
                mensaje("Debe seleccionar la categoria del producto 🤔", Categoria);
            }
            if (Precio.value === "") {
                mensaje("El precio del producto es requerido ", Precio);
                bandera = false;
            }
            else {
                if (!PrecioValidacion.test(Precio.value)) {
                    mensaje("El precio del producto no es valido ", Precio);
                    bandera = false;
                }
            }
            if (Cantidad.value === "") {
                mensaje("La cantidad del producto es requerido ", Cantidad);
                bandera = false;
            }
            else {
                if (!NumeroValidar.test(Cantidad.value)) {
                    mensaje("La cantidad del producto no es valido ", Cantidad);
                    bandera = false;
                }
            }
            if (Imagen.value === "") {
                mensaje("La imagen del producto es requerido ", Imagen);
                bandera = false;
            }
            else {
                if (!ImagenValidar.test(Imagen.value)) {
                    mensaje("La imagen del producto no es valido ", Imagen);
                    bandera = false;
                }
            }
            if (bandera === true) {
                alert("Producto registrado con exito 🤗");
                window.location.reload();
            }
            else {
                alert("Campos invalidos 😑");
            }

        }
        function mensaje(cadenaMensaje, elemento) {
            elemento.focus();
            var nodoPadre = elemento.parentNode;
            var nodoMensaje = document.createElement("span");
            nodoMensaje.textContent = cadenaMensaje;
            nodoMensaje.style.color = "#e74c3c";
            nodoMensaje.style.marginLeft = "20px";
            nodoMensaje.setAttribute("class", "mensajeError");
            nodoPadre.appendChild(nodoMensaje);
        }

        function limpiarMensajes() {
            var mensajes = document.querySelectorAll(".mensajeError");
            for (let i = 0; i < mensajes.length; i++) {
                mensajes[i].remove();
            }
        }

    