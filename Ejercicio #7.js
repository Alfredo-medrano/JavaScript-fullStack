let negativos = 0;
let positivos = 0;
let multiplos15 = 0;
let sumaPares = 0;

for (let i = 0; i < 10; i++) {
  let valor = parseInt(prompt("Ingrese un valor entero: "));


  if (valor < 0) {
    negativos++;
  } else if (valor > 0) {
    positivos++;
  }
  if (valor % 15 === 0) {
    multiplos15++;
  }


  if (valor % 2 === 0) {
    sumaPares += valor;
  }
}

alert(`Cantidad de valores negativos: ${negativos}`);
alert(`Cantidad de valores positivos: ${positivos}`);
alert(`Cantidad de múltiplos de 15: ${multiplos15}`);
alert(`Suma de los números pares: ${sumaPares}`);