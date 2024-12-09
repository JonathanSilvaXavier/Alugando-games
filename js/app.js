//Aqui nesse primeiro passo recuperamos o click do botão com base no HTML, criando uma função;
function alterarStatus (id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
         // Exibe a confirmação antes de prosseguir com a devolução
        let confirmacao = confirm("Tem certeza de que deseja devolver jogo?");
        if (!confirmacao) {
            return; // Se o usuário cancelar, interrompe a função
        }

        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar'; 
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return')
    }
    contarJogosAlugados();
}

function contarJogosAlugados() {
    // Seleciona todos os elementos com a classe "dashboard__item__img--rented"
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
    // Imprime no console a quantidade de jogos alugados, colocando o .lengt para Número de elementos com a classe "classe"
    console.log(`Jogos alugados: ${jogosAlugados.length}`);
}