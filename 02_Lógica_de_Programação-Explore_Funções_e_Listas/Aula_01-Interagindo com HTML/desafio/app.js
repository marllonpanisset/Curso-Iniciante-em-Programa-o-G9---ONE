// Alterar conteúdo da tag h1
document.querySelector("h1").textContent = "Hora do Desafio";

// Exibir mensagem no console
function exibirConsole() {
  console.log("O botão foi clicado");
}

// Exibir alerta
function exibirAlerta() {
  alert("Eu amo JS");
}

// Função com prompt + alerta
function exibirCidade() {
  const cidade = prompt("Digite o nome de uma cidade brasileira:");
  if (cidade) {
    alert(`Estive em ${cidade} e lembrei de você`);
  }
}

// Função que soma dois números inteiros
function somarNumeros() {
  const valor1 = parseInt(prompt("Digite o primeiro número inteiro:"));
  const valor2 = parseInt(prompt("Digite o segundo número inteiro:"));

  if (!isNaN(valor1) && !isNaN(valor2)) {
    const resultado = valor1 + valor2;
    alert(`O resultado da soma é: ${resultado}`);
  } else {
    alert("Por favor, insira apenas números inteiros.");
  }
}
