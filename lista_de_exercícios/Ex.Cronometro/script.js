var intervaloTempo = 100; // = 1s
var tempoDecorrido = 0; //unidade de tempo = milisegundos;
var timerID;  //vai receber o ID do temporizador;

function zerarCronometro(){
  //exibir o histórico usuário
  var divParciais = document.getElementById("parciais");
  divParciais.innerHTML += (tempoDecorrido/1000).toFixed(1) + " s<br>";
  //divParciais.innerHTML = divParciais.innerHTML + (tempoDecorrido/1000).toFixed(1) + " s<br>";

  //zerar o contador
  tempoDecorrido = 0;
  //exibir para o usuario
  var divTempo = document.getElementById("tempo");
  divTempo.innerHTML = (tempoDecorrido/1000).toFixed(1) + " s";
  //desabilitar o zerar
  var resetButton = document.getElementById("reset");
  resetButton.disabled = true;
}

function pausarCronometro(){
  //desabilitar o pausar
  var pauseButton = document.getElementById("pause");
  pauseButton.disabled = true;
  //habilitar o zerar
  var resetButton = document.getElementById("reset");
  resetButton.disabled = false;
  //habilitar o iniciar
  var playButton = document.getElementById("play");
  playButton.disabled = false;
  //pausar a contagem
  clearInterval(timerID);
}
function iniciarCronometro(){
  //desabilitar o botão iniciarCronometro
  var playButton = document.getElementById("play");
  playButton.disabled = true;
  //habilitar o botão PAUSAR
  var pauseButton = document.getElementById("pause");
  pauseButton.disabled = false;
  //desabilitar o zerar
  var resetButton = document.getElementById("reset");
  resetButton.disabled = true;
  //iniciar a contagem
  timerID = setInterval(conta, intervaloTempo);
}

function conta(){
  tempoDecorrido = tempoDecorrido + intervaloTempo;
  var divTempo = document.getElementById("tempo");
  divTempo.innerHTML = (tempoDecorrido/1000).toFixed(1) + " s";
}