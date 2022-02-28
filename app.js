let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}
function convert(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const user_word = "user".fontsize(3).sup();
  const computer_word = "comp".fontsize(3).sup();
  result_div.innerHTML = `${convert(userChoice)}${user_word}  beats ${convert(
    computerChoice
  )}${computer_word} . You win!`;
}
function lose(userChoice,computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const user_word = "user".fontsize(3).sup();
  const computer_word = "comp".fontsize(3).sup();
  result_div.innerHTML = `${convert(userChoice)}${user_word}  loses to ${convert(
    computerChoice
  )}${computer_word} . You lost...`;
}
function draw(userChoice,computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const user_word = "user".fontsize(3).sup();
  const computer_word = "comp".fontsize(3).sup();
  result_div.innerHTML = `${convert(userChoice)}${user_word}  equals ${convert(
    computerChoice
  )}${computer_word} . It's a draw.`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}
main();
