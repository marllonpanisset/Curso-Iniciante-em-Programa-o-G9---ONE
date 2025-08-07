// Função 1: Exibe "Olá, mundo!" no console
function saudacaoGlobal() {
  console.log("Olá, mundo!");
}

// Função 2: Recebe um nome e exibe "Olá, [nome]!" no console
function saudacaoPersonalizada(nome) {
  console.log(`Olá, ${nome}!`);
}

// Função 3: Recebe um número e retorna o dobro
function dobrarNumero(numero) {
  return numero * 2;
}

// Função 4: Recebe três números e retorna a média
function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

// Função 5: Recebe dois números e retorna o maior
function encontrarMaior(a, b) {
  return a > b ? a : b;
}

// Função 6: Recebe um número e retorna ele multiplicado por ele mesmo
function quadrado(numero) {
  return numero * numero;
}

// Execução das funções (bloco principal)
(function executarFuncoes() {
  saudacaoGlobal(); // "Olá, mundo!"
  saudacaoPersonalizada("Marllon"); // "Olá, Marllon!"

  const numero = 5;
  console.log(`Dobro de ${numero}:`, dobrarNumero(numero)); // 10

  const media = calcularMedia(7, 8, 9);
  console.log(`Média:`, media); // 8

  const maior = encontrarMaior(12, 20);
  console.log(`Maior número:`, maior); // 20

  const resultadoQuadrado = quadrado(6);
  console.log(`Quadrado de 6:`, resultadoQuadrado); // 36
})();

