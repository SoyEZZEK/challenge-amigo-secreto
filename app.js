// Array global para almacenar los nombres ingresados.
let amigos = [];

// Función que permite agregar nombres al Array mediante un campo de entrada.
function agregarAmigo() {
    const nombre = document.querySelector("#amigo").value;

    if (nombre === "" || amigos.includes(nombre)) {
        // Si el usuario ingresa un nombre vacío o repetido se mostrará una alerta y no se agregará al array.
        alert("Por favor, ingresa un nombre válido o no repetido.");
        limpiarInput();
    } else {
        // Agrega el nombre ingresado al array.
        amigos.push(nombre);
        limpiarInput();
        actualizarLista();
    }
    console.log(`Amigos: ${amigos.join(", ")}.`);
}

// Evento que permite usar la tecla "Enter" para agregar un amigo en lugar de hacer clic en el botón "Añadir".
document.querySelector("#amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

// Función usada para limpiar el campo de entrada después de agregar un nombre.
function limpiarInput() {
    const input = document.querySelector("#amigo");
    input.value = "";
    input.focus(); // Coloca el cursor automáticamente en el campo de entrada.
}

// Función que actualiza la lista de amigos en el HTML.
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); // Crea un nuevo elemento de lista (li).
        li.textContent = amigos[i]; // Asigna el nombre del amigo al contenido del li.
        lista.appendChild(li); // Agrega el li a la lista en el HTML.
    }
}

// Función que realiza el sorteo, elige al amigo secreto y muestra el resultado en la pantalla.
function sortearAmigo() {
    let amigoSorteado = document.querySelector("#resultado");

    if (amigos.length < 2) {
        // Si hay menos de dos amigos en la lista, se muestra una alerta y no se realiza el sorteo.
        alert("Debes agregar al menos dos amigos para realizar el sorteo.");
        return;
    } else {
        // Realiza el sorteo y muestra el nombre del amigo secreto en la pantalla.
        let sorteo = Math.floor(Math.random()*amigos.length);
        amigoSorteado.textContent = `El amigo secreto es: ${amigos[sorteo]}`;
        console.log(`El amigo secreto es: ${amigos[sorteo]}.`);
    }
}

// Función que reinicia el sorteo, limpia la lista de amigos y el resultado mostrado en pantalla.
function reiniciar() {
    amigos = [];
    actualizarLista();
    document.querySelector("#resultado").textContent = "";
    limpiarInput();
}