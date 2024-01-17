var valor = document.getElementById("value");
valor.addEventListener("keyup",fibonacci);
salida = document.getElementById("out mensaje");
secuencia = document.getElementById("resultado");

function fibonacci(){
  if (valor.value==""){
    return;
  }
  number = valor.value;
  number = parseFloat(number)

  let i = 0
  let Fibo = [0, 1]
  let Fibonacci = []
  // secuencia.innerHTML = Fibo[1];
  while (i != number){
    nuevo_numero = Fibo[0] + Fibo[1]
    Fibo.push(nuevo_numero)
    Fibonacci.push(Fibo[0])
    Fibo.shift()
    i += 1
  }
  salida.innerHTML = "La secuencia de Fibonacci es:"
  secuencia.innerHTML = Fibonacci;
}

