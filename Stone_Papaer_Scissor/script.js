let options = ["stone", "paper", "scissor"];
let result = document.getElementById("final");
let dis = document.getElementById("computer");
console.log(computer);
a = document.getElementById("stone");
b = document.getElementById("paper");
c = document.getElementById("scissor");
reset = document.getElementById("reset");
scores = document.getElementById("score");
compScore = document.getElementById("compScore");
reset.addEventListener("click", refresh);
a.addEventListener("click", fetchStone);
b.addEventListener("click", fetchPaper);
c.addEventListener("click", fetchScissor);
let userScore = 0;
let computerScore = 0;
function fetchStone() {
  let random = Math.round(Math.random() * 2);
  let computer = options[random];
  if (computer == "paper") {
    result.innerHTML = "You Lost";
    result.style.color = "red";
    computerScore += 1;
  } else if (computer == "scissor") {
    result.innerHTML = "You Won";
    result.style.color = "green";
    userScore += 1;
  } else {
    result.innerHTML = "Its a Tie";
    result.style.color = "yellow";
    
  }
  dis.innerHTML = "Computer : " + computer;
  scores.innerHTML = "Your Score : " + userScore;
  compScore.innerHTML = "Computer Score : " + computerScore;
}
function fetchPaper() {
  let random = Math.round(Math.random() * 2);
  let computer = options[random];
  if (computer == "scissor") {
    result.innerHTML = "You Lost";
    result.style.color = "red";
    computerScore += 1;
  } else if (computer == "stone") {
    result.innerHTML = "You Won";
    result.style.color = "green";
    userScore += 1;
  } else {
    result.innerHTML = "Its a Tie";
    result.style.color = "yellow"
  }
  dis.innerHTML = "Computer : " + computer;
  scores.innerHTML = "Your Score : " + userScore;
  compScore.innerHTML = "Computer Score : " + computerScore;
}
function fetchScissor() {
  let random = Math.round(Math.random() * 2);
  let computer = options[random];
  if (computer == "stone") {
    result.innerHTML = "You Lost";
    result.style.color = "red";
    computerScore += 1;
    result.style.color = "red";
  } else if (computer == "paper") {
    result.innerHTML = "You Won";
    userScore += 1;
    result.style.color = "green";
  } else {
    result.innerHTML = "Its a Tie";
    result.style.color = "yellow";
  }
  dis.innerHTML = "Computer : " + computer;
  scores.innerHTML = "Your Score : " + userScore;
  compScore.innerHTML = "Computer Score : " + computerScore;
}
function refresh() {
  result.innerHTML = "Reseting Game";
  result.style.color = "white";
  window.location.reload();
}
