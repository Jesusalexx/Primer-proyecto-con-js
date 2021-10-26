let fechaFinal = new Date('Nov 2, 2021 00:00:00');

let tiempo = setInterval(() => {
    let now = new Date().getTime();

    let diferencia = fechaFinal - now;

    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let horas = Math.floor(diferencia % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutos = Math.floor(diferencia % (1000 * 60 * 60 * 24) / (1000 * 60));
    let segundos = Math.floor(diferencia % (1000 * 60 * 60 * 24) / 1000);

    document.querySelector('#cuentaregresiva').innerHTML = `
    <h3> Faltan ${dias} Dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos
    `;

    if (diferencia < 0) {
        clearInterval(tiempo);
        document.querySelector('#cuentaregresiva').innerHTML = `
        Feliz Cumpleaños Chamita Chamita!!
        `;
    }


}, 1000);