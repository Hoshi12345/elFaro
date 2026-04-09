function actualizarReloj() {

    const ahora = new Date();  // obtiene la fecha y las hora actual

    // extraer horas, minutos y segundos
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    // agregar un cero a la izquierda si el valor es menor a 10

    horas = horas < 10 ? '0' + horas: horas;
    minutos = minutos < 10 ? '0' + minutos :minutos;
    segundos = segundos < 10 ? '0'+ segundos : segundos;

    // creacion de variable

    const tiempoString = horas + ':' + minutos + ':' + segundos;

    // Actualiza el contenido del HTML
    document.getElementById('reloj').textContent = tiempoString;

}

    // llama a la funcion una vez al inicio para evitar el retraso de 1 segundo
    actualizarReloj();

    // ejecutar la funcion cada segundo
    setInterval(actualizarReloj, 1000);