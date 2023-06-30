let jogador = null;
let vencedor = null;
let jogadorSelecionado = document.getElementById('sJogadorDaVez');
let vencedorSelecionado = document.getElementById('vencedorDPartida');

mudarJogador('X');
selecionarCasa();

function selecionarCasa(id) {
  if (vencedor !== null) {
      return;
    }

  let tile = document.getElementById(id);
  if (tile.innerHTML !== '') {
      return;
    }

  tile.innerHTML = jogador;
  tile.style.color = '#000';

  if (jogador === 'X') {
      jogador = 'O';
  } else {
      jogador = 'X';
  }

  mudarJogador(jogador);
  checaVencedor();
}

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
  let tile1 = document.getElementById(1);
  let tile2 = document.getElementById(2);
  let tile3 = document.getElementById(3);
  let tile4 = document.getElementById(4);
  let tile5 = document.getElementById(5);
  let tile6 = document.getElementById(6);
  let tile7 = document.getElementById(7);
  let tile8 = document.getElementById(8);
  let tile9 = document.getElementById(9);

  if (checaSequencia(tile1, tile2, tile3)) {
    mudaCorQuadrado(tile1, tile2, tile3);
    mudarVencedor(tile1);
      return;
  }

  if (checaSequencia(tile4, tile5, tile6)) {
    mudaCorQuadrado(tile4, tile5, tile6);
    mudarVencedor(tile4);
      return;
  }

  if (checaSequencia(tile7, tile8, tile9)) {
    mudaCorQuadrado(tile7, tile8, tile9);
    mudarVencedor(tile7);
      return;
  }

  if (checaSequencia(tile1, tile4, tile7)) {
    mudaCorQuadrado(tile1, tile4, tile7);
    mudarVencedor(tile1);
      return;
  }

  if (checaSequencia(tile2, tile5, tile8)) {
    mudaCorQuadrado(tile2, tile5, tile8);
    mudarVencedor(tile2);
      return;
  }

  if (checaSequencia(tile3, tile6, tile9)) {
    mudaCorQuadrado(tile3, tile6, tile9);
    mudarVencedor(tile3);
      return;
  }

  if (checaSequencia(tile1, tile5, tile9)) {
    mudaCorQuadrado(tile1, tile5, tile9);
    mudarVencedor(tile1);
      return;
  }

  if (checaSequencia(tile3, tile5, tile7)) {
    mudaCorQuadrado(tile3, tile5, tile7);
    mudarVencedor(tile3);
  }
}

function mudarVencedor(tile) {
  vencedor = tile.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(tile1, tile2, tile3) {
  tile1.style.background = '#00f';
  tile2.style.background = '#00f';
  tile3.style.background = '#00f';
}

function checaSequencia(tile1, tile2, tile3) {
  let eigual = false;

  if (tile1.innerHTML !== '' && tile1.innerHTML === tile2.innerHTML && tile2.innerHTML === tile3.innerHTML) {
    eigual = true;
  }

  return eigual;
}
function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

  for (let i = 1; i <= 9; i++) {
    let tile = document.getElementById(i);
      tile.style.background = 'cadetblue';
      tile.innerHTML = '';
  }

  mudarJogador('X');
}
