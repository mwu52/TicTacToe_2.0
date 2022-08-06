let mode = 2;
let gameState = true;
let firstPlayer = Math.round(Math.random());
let win = [
  ["one", "two", "three"],
  ["four", "five", "six"],
  ["seven", "eight", "nine"],
  ["one", "four", "seven"],
  ["two", "five", "eight"],
  ["three", "six", "nine"],
  ["one", "five", "nine"],
  ["three", "five", "seven"],
];

function submitName() {
  let player1 = document.getElementById("p1").value;
  let player2 = document.getElementById("p2").value;

  document.getElementById("player1").innerHTML = player1;

  document.getElementById("player2").innerHTML = player2;
}

Array.from(document.getElementsByClassName("cell")).forEach((element) => {
  element.addEventListener("click", play);
});

function play(event) {
  let move;
  if (firstPlayer === 1) {
    move = "X";
  } else {
    move = "O";
  }
  let cell = event.target;
  cell.innerHTML = move;
  if (firstPlayer === 1) {
    firstPlayer = 0;
  } else {
    firstPlayer = 1;
  }

  if (checkWin() === true) {
    gameState = false;
    document.getElementById("message").innerHTML = "You win!";
  }

  if (checkDraw() === true) {
    gameState = false;
    document.getElementById("message").innerHTML = "It's a Draw!";
  }

}

function checkWin() {
  for (let i = 0; i < win.length; i++) {
    let check = "";
    for (let j = 0; j < win[i].length; j++) {
      check += document.getElementById(win[i][j]).innerHTML;
    }
    if (check === "XXX" || check === "OOO") {
      return true;
    }
  }
  return false;
}

function checkDraw(){
    if(
        document.getElementById("one").innerHTML &&
        document.getElementById("two").innerHTML &&
        document.getElementById("three").innerHTML &&
        document.getElementById("four").innerHTML &&
        document.getElementById("five").innerHTML &&
        document.getElementById("six").innerHTML &&
        document.getElementById("seven").innerHTML &&
        document.getElementById("eight").innerHTML &&
        document.getElementById("nine").innerHTML
    ){return true;
    }
return false;
    
}

function reset() {
  document.getElementById("message").innerHTML = "";
  document.getElementById("one").innerHTML = "";
  document.getElementById("two").innerHTML = "";
  document.getElementById("three").innerHTML = "";
  document.getElementById("four").innerHTML = "";
  document.getElementById("five").innerHTML = "";
  document.getElementById("six").innerHTML = "";
  document.getElementById("seven").innerHTML = "";
  document.getElementById("eight").innerHTML = "";
  document.getElementById("nine").innerHTML = "";
}


