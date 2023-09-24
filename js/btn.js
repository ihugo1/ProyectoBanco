//función de alerta
function mostrarAlerta(mensaje, tipo) {
    Swal.fire({
        title: '¡Operación Realizada con exito!',
        text: mensaje,
        icon: tipo,
        confirmButtonText: 'OK'
    });
}

//Eventos
document.getElementById('btn_retiro').addEventListener('click', function() {
    mostrarAlerta();
});

document.getElementById('btn_deposito').addEventListener('click', function() {
    mostrarAlerta();
});

document.getElementById('btn_servicios').addEventListener('click', function() {
    mostrarAlerta();
});