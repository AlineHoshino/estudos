{/* <a href="https://www.flaticon.com/br/icones-gratis/google-play-music" title="google play music ícones">Google play music ícones criados por IYAHICON - Flaticon</a>
// vídeo for your deligth
//<a href="https://www.flaticon.com/free-icons/rewind" title="rewind icons">Rewind icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/stop-button" title="stop button icons">Stop button icons created by joalfa - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/next" title="next icons">Next icons created by Roundicons - Flaticon</a> */}
{/* <a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icons created by Chanut - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/minimize" title="minimize icons">Minimize icons created by Bingge Liu - Flaticon</a> */}
// Imagens de flatIcon com referências
// Vídeo de for your delight;

let video = document.getElementById('video1');

function retroceder(){
  video.currentTime -= 15;// próprio vídeo menos 15
}

function avancar(){
  video.currentTime +=15;
}

function diminuir_vel(){
  video.playbackRate -= 0.1;
}

function aumentar_vel(){
  video.playbackRate += 0.1;
}

function play(){
  video.play();
}

function stop(){
  video.pause();
  video.currentTime = 0;
}

let controles = document.getElementsByClassName('controle')[0];

function show(){
  controles.style.opacity="1";
}

function hide(){
  controles.style.opacity="0";
}