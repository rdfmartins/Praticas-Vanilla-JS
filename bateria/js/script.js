// Ouvindo com Listener o evento
window.addEventListener("keydown", function (e) {
  // Escuta/seleciona no doc de html a tag <audio> e se nela tem o atritubo "data-key"
  // Lembrando que para buscar atibutos é utilizado [] igual em CSS. Daria para criar com class
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // Selelcionada/escuta a class="key"  no html
  const key = document.querySelector(`.key[dastusta-key="${e.keyCode}"]`);

  if (!audio) return; // Para a função se não tiver audio
  audio.currentTime = 0; // Reinicia o audio do 0
  audio.play(); // realiza o play audio

  // relizado a "animação" depois de adicionar/remover/toggle o css playing "
  key.classList.add("playing");

  // traz uma array das class .key
  function removeTransition(e) {
    if (e.propertyName != "transform") return;
    console.log(e.propertyName);
  }
  const keys = document.querySelectorAll(".key");
  // No lugar de uma setTimeout para não tem que problemas com o css, "setei"
  // a remoção do transtion que esta ocorrendo em ".playing "
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );

  //console.log(key);
});
