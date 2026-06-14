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

let index = 0;
let autoPlay = true;
let interval;

const data = [
{
img:"https://picsum.photos/900/500?1",
title:"Fundação da Corporação",
desc:"A corporação nasceu para proteger a cidade em grandes emergências."
},
{
img:"https://picsum.photos/900/500?2",
title:"Primeira Missão",
desc:"Equipe salvou dezenas de vidas em incêndio histórico."
},
{
img:"https://picsum.photos/900/500?3",
title:"Elite Operacional",
desc:"Unidade altamente treinada e reconhecida no estado."
}
];

function update(direction = "next") {
    const img = document.getElementById("img");
    const title = document.getElementById("title");
    const desc = document.getElementById("desc");
    const bar = document.getElementById("bar");

    // efeito de saída
    img.style.opacity = "0";
    img.style.transform = direction === "next" ? "translateX(30px)" : "translateX(-30px)";

    setTimeout(() => {

        img.src = data[index].img;
        title.textContent = data[index].title;
        desc.textContent = data[index].desc;

        // efeito de entrada
        img.style.opacity = "1";
        img.style.transform = "translateX(0) scale(1.03)";

        // barra animada suave
        bar.style.transition = "width 0.6s ease";
        bar.style.width = ((index + 1) / data.length) * 100 + "%";

    }, 250);
}

function next(){
    index = (index + 1) % data.length;
    update("next");
}

function prev(){
    index = (index - 1 + data.length) % data.length;
    update("prev");
}

/* AUTO PLAY */
function startAuto(){
    interval = setInterval(() => {
        if(autoPlay) next();
    }, 4000);
}

/* PAUSA AO INTERAGIR */
document.addEventListener("mouseover", () => autoPlay = false);
document.addEventListener("mouseout", () => autoPlay = true);

/* TECLADO */
document.addEventListener("keydown", (e) => {
    if(e.key === "ArrowRight") next();
    if(e.key === "ArrowLeft") prev();
});

/* INICIAL */
window.onload = () => {
    update();
    startAuto();
};
