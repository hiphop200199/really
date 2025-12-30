let BGM = new Audio("/music/horror-dark-cinematic-music.mp3");
let footstepSFX = new Audio("/sfx/footsteps-male.mp3");
let swordSFX = new Audio("/sfx/sword-slash-and-swing.mp3");
let eatingSFX = new Audio("/sfx/eating.mp3");
let drinkingSFX = new Audio("/sfx/drinking.mp3");
let oldmanSFX = new Audio("/sfx/old-man.mp3");
let airSFX = new Audio("/sfx/air-blowing.mp3");
let page = document.getElementById("page");
let screen = document.getElementById("screen");
let text = document.getElementById("text");
let button = document.getElementById("button");
let eventOrder = [];
let order = 0;
let image = document.getElementById("image");
let clearness = 5;

BGM.volume = 0.3;
BGM.loop = true;
BGM.play();
text.innerText = mazeConversation.entry;
for (let i = 0; i < 8; i++) {
  let index = Math.floor(Math.random() * mazeEvent.length);
  eventOrder.push(mazeEvent[index]);
  mazeEvent.splice(index, 1);
}

setTimeout(() => {
  text.innerText = "";
  footstepSFX.pause();
  footstepSFX.currentTime = 0;
  footstepSFX.play();
  setTimeout(() => {
    footstepSFX.pause();
    image.src = mazeConversation[eventOrder[order]].image;
    text.innerText = mazeConversation[eventOrder[order]].meet;
    for (let i = 0; i < 2; i++) {
      buttonHandle(i);
    }
  }, 2000);
}, 2000);

function readyNextRound() {
  order++;
  if (order == eventOrder.length) {
    if (clearness > 3) {
      BGM.pause();
      page.style.backgroundColor = "#EFECE3";
      screen.style.backgroundImage = "none";
      text.style.color = "#000000";
      text.innerText = mazeConversation.normal_end;
      while (button.firstChild) {
        button.removeChild(button.firstChild);
      }
    } else {
      BGM.volume = 1;
      image.src = mazeConversation.ghost.image;
      text.innerText = mazeConversation.bad_end;
      while (button.firstChild) {
        button.removeChild(button.firstChild);
      }
    }
  } else {
    text.innerText = "";
    footstepSFX.pause();
    footstepSFX.currentTime = 0;
    footstepSFX.play();
    setTimeout(() => {
      footstepSFX.pause();
      image.src = mazeConversation[eventOrder[order]].image;
      text.innerText = mazeConversation[eventOrder[order]].meet;
      for (let i = 0; i < 2; i++) {
        buttonHandle(i);
      }
    }, 2000);
  }
}

function buttonHandle(i) {
  let btn = document.createElement("button");
  btn.innerText = buttonText(eventOrder[order], i);
  btn.onclick = buttonEvent(eventOrder[order], i);
  button.appendChild(btn);
}

function buttonText(type, index) {
  let text = "";
  switch (type) {
    case "orc":
    case "ghost":
    case "snake":
    case "ceberus":
      text =
        index == 0
          ? mazeButton.monster_slash.text
          : mazeButton.monster_remind.text;
      break;
    case "wizard":
      text =
        index == 0
          ? mazeButton.wizard_listen.text
          : mazeButton.wizard_skip.text;
      break;
    case "potion":
      text =
        index == 0 ? mazeButton.potion_drink.text : mazeButton.potion_skip.text;
      break;
    case "apple":
      text =
        index == 0 ? mazeButton.apple_eat.text : mazeButton.apple_skip.text;
      break;
    case "fountain":
      text =
        index == 0
          ? mazeButton.fountain_drink.text
          : mazeButton.fountain_skip.text;
      break;
  }

  return text;
}

function buttonEvent(type, index) {
  let monster = ["ceberus", "orc", "ghost", "snake"];
  text.innerText = "";
  while (button.firstChild) {
    button.removeChild(button.firstChild);
  }
  if (index == 0 && monster.includes(type)) {
    swordSFX.pause();
    swordSFX.currentTime = 0;
    swordSFX.play();
    clearness += mazeButton.monster_slash.score;
  } else if (index == 0 && (type == "potion" || type == "fountain")) {
    drinkingSFX.pause();
    drinkingSFX.currentTime = 0;
    drinkingSFX.play();
    clearness += mazeButton.fountain_drink.score;
  } else if (index == 0 && type == "apple") {
    eatingSFX.pause();
    eatingSFX.currentTime = 0;
    eatingSFX.play();
    clearness += mazeButton.apple_eat.score;
  } else if (index == 0 && type == "wizard") {
    oldmanSFX.pause();
    oldmanSFX.currentTime = 0;
    oldmanSFX.play();
    clearness += mazeButton.wizard_listen.score;
  } else {
    airSFX.pause();
    airSFX.currentTime = 0;
    airSFX.play();
    if (monster.includes(type)) {
      clearness += mazeButton.monster_remind.score;
    } else if (type == "wizard") {
      clearness += mazeButton.wizard_skip.score;
    } else if (type == "potion") {
      clearness += mazeButton.potion_skip.score;
    } else if (type == "fountain") {
      clearness += mazeButton.fountain_skip.score;
    } else {
      clearness += mazeButton.apple_skip.score;
    }
  }
  setTimeout(() => {
    swordSFX.pause();
    airSFX.pause();
    eatingSFX.pause();
    drinkingSFX.pause();
    oldmanSFX.pause();
    image.src = "";
    text.innerText =
      i == 0
        ? mazeConversation[eventOrder[order]].pos
        : mazeConversation[eventOrder[order]].skip;
  }, 1000);
  setTimeout(() => {
    readyNextRound();
  }, 3000);
}
