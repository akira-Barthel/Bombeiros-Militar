function sirenSound(){
  let audio = new Audio("https://www.soundjay.com/transport/sounds/police-siren-01.mp3");
  audio.volume = 0.4;
  audio.play();
}

function login() {
  let name = document.getElementById("username").value;

  if (name === "") {
    alert("Digite seu nome!");
    return;
  }

  // salva nome
  localStorage.setItem("bombeiroName", name);

  // efeito de sirene ao entrar
  sirenSound();

  // animação de saída do login
  document.querySelector(".box").style.transform = "scale(0.9)";
  document.querySelector(".box").style.opacity = "0";

  setTimeout(() => {
    document.getElementById("login").style.display = "none";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("showName").innerText = name;
  }, 400);
}

// auto login
window.onload = function() {
  let saved = localStorage.getItem("bombeiroName");

  if (saved) {
    document.getElementById("login").style.display = "none";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("showName").innerText = saved;

    sirenSound();
  }
}
