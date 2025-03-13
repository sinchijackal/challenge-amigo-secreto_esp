// Inicializando array de amigos
let amigos = [];

/**
 * Función para agregar un amigo al array
 * @returns {void}
 */
function agregarAmigo() {
    // Obteniendo el valor del input
    let nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo !== '') {
        // Agregando el valor al array
        amigos.push(nombreAmigo);
        // Mostrar el array en el HTML
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML += `<li>${nombreAmigo}</li>`;
        // Limpiando el input
        document.getElementById('amigo').value = '';
    } else {
        // Limpiando el input
        document.getElementById('amigo').value = '';
        document.getElementById('amigo').focus();
        // Mostrando mensaje de alerta
        alert('Por favor, ingresa un nombre');
    }
}


function sortearAmigo() {
    // Obteniendo un número aleatorio
    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    // Obteniendo el amigo sorteado
    let amigoSorteado = amigos[numeroAleatorio];
    // Mostrando el amigo sorteado en el HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`;
}


/**
 * Función para verificar si se presionó la tecla Enter
 * @param {Event} event
 * @returns {void}
 */
function checkEnter(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
}

