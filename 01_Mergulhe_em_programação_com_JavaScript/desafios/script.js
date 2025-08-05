function executarDesafios() {
    console.log("Bem-vindo ao programa de desafios!");
  
    let nome = "Marllon";
    console.log("Olá, " + nome + "!");
    alert("Olá, " + nome + "!");
  
    let linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
    console.log("Você gosta de: " + linguagemFavorita);
  
    let valor1 = 8;
    let valor2 = 5;
    let resultadoSoma = valor1 + valor2;
    console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}.`);
  
    let resultadoSubtracao = valor1 - valor2;
    console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultadoSubtracao}.`);
  
    let idade = prompt("Qual sua idade?");
    if (idade >= 18) {
      console.log("Você é maior de idade.");
    } else {
      console.log("Você é menor de idade.");
    }
  
    let numero = prompt("Digite um número:");
    numero = parseFloat(numero);
    if (numero > 0) {
      console.log("O número é positivo.");
    } else if (numero < 0) {
      console.log("O número é negativo.");
    } else {
      console.log("O número é zero.");
    }
  
    let contador = 1;
    while (contador <= 10) {
      console.log("Contador: " + contador);
      contador++;
    }
  
    let nota = 6.5;
    if (nota >= 7) {
      console.log("Aprovado");
    } else {
      console.log("Reprovado");
    }
  
    let aleatorio = Math.random();
    console.log("Número aleatório:", aleatorio);
  
    let aleatorio1a10 = Math.floor(Math.random() * 10) + 1;
    console.log("Número entre 1 e 10:", aleatorio1a10);
  
    let aleatorio1a1000 = Math.floor(Math.random() * 1000) + 1;
    console.log("Número entre 1 e 1000:", aleatorio1a1000);
  }
  