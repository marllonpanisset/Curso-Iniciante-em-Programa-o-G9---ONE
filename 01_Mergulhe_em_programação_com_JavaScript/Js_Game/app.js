// Alerta de Bem vindo do Jogo
alert('Bem vindo ao Jogo do Numero Secreto!');

// Numero Maximo para base de calculo do numero secreto aleatório
let numeroMaximo = 1000;

//valor do numero secreto
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// console.log(numeroSecreto);

//chutes
let chute;

// armazena contagem de tentativas
let tentativas = 1;

// enquanto o chute não foi igual ao Número escolhido
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
    
    if (chute == numeroSecreto) {
        //Para o While Se o Numero secreto for adivinhado de primeira
        break;
        
    //Entra no Loop até a pessoa acertar
    } else {
        
        // Verifica e Exibe se o numero secreto é menor que o numero do chute
        if (chute > numeroSecreto) {
            alert(`o número secreto é menor que ${chute}`);

        // Verifica e Exibe se o numero secreto é maior que o numero do chute
        } else {
            alert(`o número secreto é maior que ${chute}`);
        }
        
        //Conta e Armazena quantas vezes a pessoa chutou até acertar 
        tentativas++;
    }
}

// Operador Ternário, faz a mesma coisa que o If Else de forma resumida, menos 4 linhas de codigo.
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// Exibe Mensagem final do jogo.
alert(`Voce descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);