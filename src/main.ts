import { Choice, randomNumber, setUserChoice } from "./utils/functions";

const playerForm = document.getElementById("playerForm") as HTMLFormElement;
const playerChoice = document.getElementById("playerChoice") as HTMLSelectElement;
let cpuChoice = randomNumber(3);
const cpuSelected = document.getElementById("cpuSelected") as HTMLElement;
const playerSelected = document.getElementById("playerSelected") as HTMLElement;
const headerResults = document.getElementById("headerResults") as HTMLElement
const resetBtn = document.getElementById("reset") as HTMLButtonElement

function getWinner(cpu: number, player: HTMLSelectElement) {
  const cpuChoice = cpu;
  const playerChoice = parseInt(player.value);

  if (playerChoice > cpuChoice) {
    headerResults.textContent = "Ganaste!";
    headerResults.setAttribute("class", "winner")
    playerSelected.setAttribute("class", "winner")
    cpuSelected.setAttribute("class", "loser")

  } else if (playerChoice == cpuChoice) {
    document.querySelectorAll('span').forEach((e) => {
      e.setAttribute("class", "tie")
    })
    headerResults.textContent = "Empate!";
    headerResults.setAttribute("class", "tie")
  } else {
    headerResults.textContent = "Perdiste!";
    headerResults.setAttribute("class", "loser")
    playerSelected.setAttribute("class", "loser")
    cpuSelected.setAttribute("class", "winner")
  }
}

playerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  cpuChoice = randomNumber(3);
  cpuSelected.textContent = Choice[cpuChoice]
  playerSelected.textContent = setUserChoice(playerChoice.value)
  
  getWinner(cpuChoice, playerChoice);
});

resetBtn.addEventListener("click", () => {
  cpuChoice = randomNumber(3);
  cpuSelected.textContent = Choice[cpuChoice]
  playerSelected.textContent = setUserChoice(playerChoice.value)
  headerResults.textContent = "Elije una opción";
  headerResults.setAttribute("class", "")
  playerSelected.setAttribute("class", "")
  cpuSelected.setAttribute("class", "")
  playerChoice.value = "0"
})