// Función para marcar el punto de control
function marcarPuntoControl() {
    const horaPrevista = this.parentNode.querySelector('span').textContent.split(' - ')[1];
    const diferenciaMinutos = calcularRetrasoAdelanto(horaPrevista);

    const tiempoElemento = this.parentNode.querySelector('.tiempo');
    tiempoElemento.textContent = `${Math.abs(diferenciaMinutos)} minutos`;

    if (diferenciaMinutos < 0) {
        tiempoElemento.style.color = 'red';
        tiempoElemento.textContent = `+${Math.abs(diferenciaMinutos)}`; // Agregar el signo positivo para el retraso
    } else if (diferenciaMinutos > 0) {
        tiempoElemento.style.color = 'green';
        tiempoElemento.textContent = `-${Math.abs(diferenciaMinutos)}`; // Agregar el signo negativo para el adelanto
    } else {
        tiempoElemento.style.color = 'green';
        tiempoElemento.textContent = `+0`; // Mostrar +0 en caso de llegar a tiempo
    }

    // Aplicar negrita al punto de control actual y remover negrita de los demás
    const puntosControl = document.querySelectorAll('.punto-control');
    puntosControl.forEach(puntoControl => puntoControl.classList.remove('negrita'));
    this.parentNode.classList.add('negrita');

    // Ocultar botón "Marcar" después de pulsarlo
    this.style.display = 'none';
}

// Función para agregar un nuevo punto de control con nombre y hora prevista
function agregarPuntoControl() {
    const nombre = prompt('Ingrese el nombre del punto de control:');
    const hora = prompt('Ingrese la hora prevista del punto de control (formato: HH:MM):');

    if (nombre && hora) {
        const puntosControl = document.querySelectorAll('.punto-control');
        const ultimoNumero = puntosControl.length + 1;

        const div = document.createElement('div');
        div.classList.add('punto-control');
        div.innerHTML = `<span>${ultimoNumero}. ${nombre} - ${hora}</span>
                         <button class="marcar">Marcar</button>
                         <span class="tiempo"></span>`;
        document.getElementById('puntos-control').appendChild(div);

        // Agregar evento al botón "Marcar" del nuevo punto de control
        const botonMarcar = div.querySelector('.marcar');
        botonMarcar.addEventListener('click', marcarPuntoControl);
	
	
        // Insertar línea divisoria después del nuevo punto de control
        if (ultimoNumero > 1) {
            const lineaDivisoria = document.createElement('hr');
            document.getElementById('puntos-control').appendChild(lineaDivisoria);
        }
    } else {
        alert('Debe ingresar un nombre y una hora prevista para el punto de control.');
    }
}

// Agregar evento al botón "Agregar punto de control"
document.getElementById('agregar').addEventListener('click', agregarPuntoControl);

// Función para calcular el retraso o adelanto
function calcularRetrasoAdelanto(horaPrevista) {
    const ahora = new Date();
    const horaActual = ahora.getHours();
    const minutosActual = ahora.getMinutes();
    const [hora, minutos] = horaPrevista.split(':');
    const horaPrevistaDate = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), hora, minutos);
    const diferenciaMinutos = Math.round((horaPrevistaDate - ahora) / 60000);
    return diferenciaMinutos;
}
