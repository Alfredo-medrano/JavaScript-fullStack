function calcularDescuentoViaje() {
    const destino = document.getElementById('destino').value;
    let descuento = 0;

    switch (destino) {
        case 'La costa del Sol':
            descuento = 0.05;
            break;
        case 'Panchimalco':
            descuento = 0.10;
            break;
        case 'Puerto el Triunfo':
            descuento = 0.15;
            break;
        default:
            console.log("Destino no válido");
            return;
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>¡Descuento aplicado!</p>
        <p>Destino seleccionado: <strong>${destino}</strong></p>
        <p>Descuento aplicado: <strong>${descuento * 100}%</strong></p>
    `;
}
document.getElementById('calcularBtn').addEventListener('click', calcularDescuentoViaje);
