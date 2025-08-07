
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        mostrarAmigos();
        input.value = '';
        input.focus();
    }
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}



function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (!nombre) {
        alert('Por favor, ingresa un nombre válido.');
        input.focus();
        return;
    }

    amigos.push(nombre);
    mostrarAmigos();
    input.value = '';
    input.focus();
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}



function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Agrega al menos un nombre.');
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}



document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

