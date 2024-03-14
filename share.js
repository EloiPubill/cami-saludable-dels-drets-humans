// Variables para almacenar los puntos de control y el progreso del recorrido
var puntosDeControl = [];
var progreso = 0; // Se puede inicializar con el tiempo total acumulado

// Función para generar el enlace dinámico
function generarEnlace() {
    // Construir el enlace utilizando los datos recopilados
    var enlace = "https://tu-sitio.com/progreso?";
    
    // Agregar los puntos de control al enlace
    for (var i = 0; i < puntosDeControl.length; i++) {
        enlace += "punto" + (i + 1) + "=" + puntosDeControl[i] + "&";
    }
    
    // Agregar el progreso al enlace
    enlace += "progreso=" + progreso;
    
    // Devolver el enlace generado
    return enlace;
}

// Función para actualizar el progreso y generar el enlace dinámico
function actualizarProgreso(nuevoProgreso) {
    // Actualizar el progreso con el nuevo valor
    progreso = nuevoProgreso;
    
    // Generar y mostrar el enlace actualizado
    var enlace = generarEnlace();
    console.log("Enlace para compartir el progreso:", enlace);
}

// Ejemplo de uso: actualizar el progreso con un nuevo valor
actualizarProgreso(30); // Suponiendo que el nuevo progreso es 30 minutos
