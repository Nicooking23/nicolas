//Estados en la app
const cuadroAlerta = document.querySelector('#alerta');
let esPrimerEvento = true;

function actualizarAlerta(mensajeEvento) {
    if (esPrimerEvento) {
        cuadroAlerta.textContent = "";
        esPrimerEvento = false;
    }
    const nuevoEvento = document.createElement('p');
    cuadroAlerta.prepend(nuevoEvento);
}

// Boton de cambiar contenido
const boton_cambiar = document.querySelector('#btn-cambiar');
boton_cambiar.addEventListener("click", () => {
    const parrafo = document.querySelector('#mensaje');
    parrafo.textContent = "Este texto viene con Javascript";
    actualizarAlerta("Acción: Se cambió el texto principal.");
});

// Ingresar información
const boton_saludar = document.querySelector('#btn-saludar');
boton_saludar.addEventListener("click", () => {
    const cuadroTexto = document.querySelector('#nombre');
    const parrafoResultado = document.querySelector("#resultado-saludo");
    const mensaje = cuadroTexto.value.trim();

    if (mensaje === "") {
    alert("Por favor, escribe un nombre.");
    actualizarAlerta("Error: Intento de saludo sin nombre.");
    return;
}   
parrafoResultado.textContent = "¡Hola, " + mensaje + "! Bienvenido/a.";
cuadroTexto.value = "";
actualizarAlerta("Acción: Se saludó a " + mensaje + ".");
});

// Contador 
const boton_sumar = document.querySelector('#btn-sumar');
const boton_restar = document.querySelector('#btn-restar');
const numero_pantalla = document.querySelector('#numero');
let contador = 0;

boton_sumar.addEventListener("click", () => {
    contador++;
    numero_pantalla.textContent = contador;
    actualizarAlerta("Acción: Se sumó 1. Total: " + contador);
});

boton_restar.addEventListener("click", () => {
    contador--;
    numero_pantalla.textContent = contador;
    actualizarAlerta("Acción: Se restó 1. Total: " + contador);
});

// boton de agregar productos a la lista
const boton_agregar = document.querySelector('#btn-agregar');
boton_agregar.addEventListener("click", () => {
    const texto = document.querySelector('#producto');
    const lista = document.querySelector('#lista-productos');
    const valorTexto = texto.value.trim();

    if (valorTexto === "") {
        alert("Porfavor ingresa un producto válido.");
        actualizarAlerta("Error: Intento de agregar producto vacío.");
        return;
    }
    let li = document.createElement('li');
    li.textContent = valorTexto;
    lista.appendChild(li);
    texto.value = "";
    actualizarAlerta("Acción: Se agregó el producto '" + valorTexto + "'.")
                             
});

// Tarjeta y el stock
let stock = 3;
const textoStock = document.createElement('p');
textoStock.textContent = "Stock disponible: " + stock;
textoStock.style.fontWeight = "bold";
textoStock.style.color = "blue";
tarjeta.insertBefore(textoStock, boton_comprar);

boton_comprar.addEventListener("click", () => {
    if (stock > 0) {
        stock--;
        textoStock.textContent = "Stock disponible: " + stock;

        alert("¡Compra exitosa! Has adquirido: " + nombre_producto);
        actualizarAlerta("Compra: Se adquirió '" + nombre_producto + "'. Stock restante: " + stock);

        tarjeta.style.backgroundColor = "#d4edda";
        setTimeout(() => { tarjeta.style.backgroundColor = ""; }, 1000); // Vuelve a la normalidad en 1 seg
        
        // Si el stock llega a 0 después de esta compra
        if (stock === 0) {
            boton_comprar.textContent = "Agotado";
            boton_comprar.disabled = true; // Desactivamos el botón
            textoStock.style.color = "red"; // Ponemos el texto en rojo
            tarjeta.style.backgroundColor = "#f8d7da"; // Tarjeta en rojo tenue permanentemente
            actualizarAlerta("Aviso: El producto '" + nombre_producto + "' se ha agotado.");
        }
    }
});