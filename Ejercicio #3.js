function calcularAumento(nombre, salario, categoria) {
    let aumento;

   
    switch (categoria) {
        case 'A':
            aumento = 0.15;
            break;
        case 'B':
            aumento = 0.30;
            break;
        case 'C':
            aumento = 0.10;
            break;
        case 'D':
            aumento = 0.20;
            break;
        default:
            console.log("Categoría no válida");
            return;
    }

    let nuevoSalario = salario + (salario * aumento);

    
    console.log(`Nombre: ${nombre}`);
    console.log(`Salario Actual: $${salario}`);
    console.log(`Categoría: ${categoria}`);
    console.log(`Aumento: ${aumento * 100}%`);
    console.log(`Nuevo Salario: $${nuevoSalario}`);
}
calcularAumento("Maria Lopez", 1500, 'B');
