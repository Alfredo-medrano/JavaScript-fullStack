function mostrarTablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  
  let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar: "));
  
  
  mostrarTablaMultiplicar(numero);