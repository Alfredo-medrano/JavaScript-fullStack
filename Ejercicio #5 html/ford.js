function calcularDescuentoCoche() {
    const carSelect = document.getElementById('carSelect').value;
    const [coche, precio] = carSelect.split(',');
    const precioNum = parseFloat(precio);
    let descuento = 0;

   
    switch (coche) {
        case 'FORD FIESTA':
            descuento = 0.05;
            break;
        case 'FORD FOCUS':
            descuento = 0.10;
            break;
        case 'FORD ESCAPE':
            descuento = 0.20;
            break;
        default:
            console.log("Modelo no válido");
            return;
    }

    const descuentoAplicado = precioNum * descuento;
    const precioFinal = precioNum - descuentoAplicado;


    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>¡Descuento aplicado!</p>
        <p>El coche seleccionado es: <strong>${coche}</strong></p>
        <p>Precio original: <strong>$${precioNum.toFixed(2)}</strong></p>
        <p>Descuento aplicado: <strong>${descuento * 100}%</strong></p>
        <p>Precio final después del descuento: <strong>$${precioFinal.toFixed(2)}</strong></p>
    `;
}

document.getElementById('calcularBtn').addEventListener('click', calcularDescuentoCoche);

/* calcularDescuentoCoche('FORD FOCUS');  */