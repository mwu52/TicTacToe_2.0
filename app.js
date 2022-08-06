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
]

function submitName(){
    let player1 = document.getElementById("p1").value;
    let player2 = document.getElementById("p2").value;
    
    document.getElementById("player1").innerText = player1;

    document.getElementById("player2").innerText = player2;
}

Array.from(document.getElementsByClassName("cell")).forEach(element => {
    element.addEventListener("click", play);
});

function play(event){
    let move;
if(firstPlayer === 1){
    move = "X";
}
else{
    move = "O";
}
let cell = event.target;
cell.innerHTML = move;
    
if (firstPlayer === 1) {
    firstPlayer = 0;
  } else {
    firstPlayer = 1;
  }



}
