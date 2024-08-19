function promedioEdades(turno, edades) {
    let total = edades.reduce((a, b) => a + b, 0);
    return total / edades.length;
  }
  
  let edadesManana = prompt("Ingrese las edades para el turno de mañana (separadas por comas): ").split(",").map(Number);
  let edadesTarde = prompt("Ingrese las edades para el turno de tarde (separadas por comas): ").split(",").map(Number);
  let edadesNoche = prompt("Ingrese las edades para el turno de noche (separadas por comas): ").split(",").map(Number);
  
  let promedioManana = promedioEdades('Mañana', edadesManana);
  let promedioTarde = promedioEdades('Tarde', edadesTarde);
  let promedioNoche = promedioEdades('Noche', edadesNoche);
  
  console.log(`Promedio de edades en la mañana: ${promedioManana}`);
  console.log(`Promedio de edades en la tarde: ${promedioTarde}`);
  console.log(`Promedio de edades en la noche: ${promedioNoche}`);
  
  let mayorPromedio = Math.max(promedioManana, promedioTarde, promedioNoche);
  let turnoMayor = "";
  
  if (mayorPromedio === promedioManana) turnoMayor = "Mañana";
  else if (mayorPromedio === promedioTarde) turnoMayor = "Tarde";
  else turnoMayor = "Noche";
  
  console.log(`El turno con el promedio de edades mayor es: ${turnoMayor}`);