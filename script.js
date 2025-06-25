let random = 0
let computer_choice = ''
let escolha = ''


let score = JSON.parse(localStorage.getItem('score'));

if (!score || score === null) {
    score = {
        wins: 0,
        loses: 0,
        ties: 0,
    };

}

atualizarPlacarNaTela()

function selecionar_random(botao) {
    let img_player = document.getElementById('img-result')
    let img_bot = document.getElementById('img-bot')
    escolha = botao.parentElement.id;

    random = Math.random()
    if (random >= 0 && random <= 1 / 3) { computer_choice = 'Pedra'; img_bot.src = './assets/rock_39413.png'; }
    else if (random > 1 / 3 && random <= 1 / 2) { computer_choice = 'Papel'; img_bot.src = './assets/hand-paper-svgrepo-com.png';  }
    else if (random > 1 / 2 && random <= 1) { computer_choice = 'Tesoura'; img_bot.src =  './assets/angellist-svgrepo-com.png';} 
    mudarModal(escolha, computer_choice, img_player)
    const modalEscolha = document.getElementById('modal')
    modalEscolha.classList.add('show');

    vitoria()

}

function resetar() {
    score.wins = 0
    score.loses = 0
    score.ties = 0
    localStorage.removeItem('score')
    atualizarPlacarNaTela()
}

function vitoria() {
    const result_game = document.getElementById('result-game')
    if (escolha == computer_choice) {
        score.ties += 1
        result_game.innerHTML = `EMPATE`



    } else if ((escolha == 'Pedra' && computer_choice == 'Tesoura') || (escolha == 'Tesoura' && computer_choice == 'Papel') || (escolha == 'Papel' && computer_choice == 'Pedra')) {
        score.wins += 1
        result_game.innerHTML = `VOCÊ VENCEU`

    } else {
        score.loses += 1
        result_game.innerHTML = `VOCÊ PERDEU`

    }
    localStorage.setItem('score', JSON.stringify(score));
    atualizarPlacarNaTela()


}

function atualizarPlacarNaTela() {
    document.getElementById('placar').textContent =
        `PLACAR:\nVitórias: ${score.wins} | Derrotas: ${score.loses} | Empates: ${score.ties}`;
}

function mudarModal(escolha, computer_choice, img_player){
    let modalPlayer = document.getElementById('p-result-player')
    modalPlayer.innerHTML = `Você jogou ${escolha}!`
    if(escolha === 'Papel'){
        img_player.src = './assets/hand-paper-svgrepo-com.png'
    }else if (escolha === 'Pedra'){
        img_player.src = './assets/rock_39413.png'
    }else{
        img_player.src = './assets/angellist-svgrepo-com.png'
    }

    let modalBot = document.getElementById('p-result-bot')
    modalBot.innerHTML = `O adversário jogou ${computer_choice}!`

}

function fecharModal(){
    const modalFechar = document.getElementById('modal')
    modalFechar.classList.remove('show');
}

document.addEventListener('click', function(e) {
  const modalFechar = document.getElementById('modal')
  if (e.target === modal) {
    modalFechar.classList.remove('show');
  }
});