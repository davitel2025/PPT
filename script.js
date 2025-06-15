let random=0
let computer_choice = ''
let escolha = ''


let score = JSON.parse(localStorage.getItem('score'));

if (!score || score === null){
    score = {
        wins: 0,
        loses: 0,
        ties: 0,
    };
  
}

/*
    Diferença entre null e undefined:
        null --> quero que o valor seja vazio
        undefined --> o valor vai ser 'default' podendo
        ser alterado
        --> na maioria das vezes usamos a mesma função
    

*/

atualizarPlacarNaTela()

function selecionar_random(botao){

    escolha = botao.parentElement.id;

    random = Math.random()
    if(random >= 0 && random <= 1/3){computer_choice = 'Pedra'}
    else if(random > 1/3 && random <= 1/2){computer_choice = 'Papel'}
    else if(random > 1/2 && random <= 1){computer_choice = 'Tesoura'}
    alert(`Você jogou ${escolha} e o oponente ${computer_choice}!`)
    vitoria()




}

function resetar(){
    score.wins = 0
    score.loses = 0
    score.ties = 0
    localStorage.removeItem('score') 
    atualizarPlacarNaTela()
}

function vitoria(){
    
    if (escolha == computer_choice){
        score.ties+=1
        alert(`Empate!\nVitórias: ${score.wins}\nDerrotas: ${score.loses}\nEmpates: ${score.ties}`)



    }else if ((escolha == 'Pedra' && computer_choice == 'Tesoura') || (escolha == 'Tesoura' &&  computer_choice == 'Papel') || (escolha == 'Papel' &&  computer_choice == 'Pedra')){
        score.wins+=1
        alert(`Você venceu!\nVitórias: ${score.wins}\nDerrotas: ${score.loses}\nEmpates: ${score.ties}`)
        
    }else{
        score.loses+=1
        alert(`Você perdeu!\nVitórias: ${score.wins}\nDerrotas: ${score.loses}\nEmpates: ${score.ties}`)
        
    }
    localStorage.setItem('score', JSON.stringify(score));
    atualizarPlacarNaTela()


}

function atualizarPlacarNaTela() {
  document.getElementById('placar').textContent =
    `PLACAR:\nVitórias: ${score.wins} | Derrotas: ${score.loses} | Empates: ${score.ties}`;
}
