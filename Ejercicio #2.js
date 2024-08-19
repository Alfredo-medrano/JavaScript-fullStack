function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    
    let notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    
    console.log(`Nombre: ${nombre}`);
    console.log(`Carnet: ${carnet}`);
    console.log(`Nota Final: ${notaFinal}`);
}
calcularNotaFinal("Juan Perez", "12345", 80, 90, 100, 85); // Ejemplo de uso
