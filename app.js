// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.ariaValueMax.trim();

    if (nombre === "") {
        alert("Porfavor, ingrese un nombre.");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo}` ya se encuentra en lista);
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.ariaValue = "";
    actualizarLista();
}