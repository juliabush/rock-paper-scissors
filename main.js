const rulesSection = document.getElementById("rules-section");
const ruleButton = document.getElementById("rule-button");
const gameHeader = document.getElementById("header");
const gameFooter = document.getElementById("footer");
const triangleGameButtons = document.getElementById("tri");
const gameBody = document.getElementById("body");
const rulesCloseButton = document.getElementById("rules-close-button");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");
const rockButton = document.getElementById("rock");
const resultSection = document.getElementById("results-section");
const paperUserPick = document.getElementById("paper-userpick");
const scissorUserPick = document.getElementById("scissors-userpick");
const rockUserPick = document.getElementById("rock-userpick");
const paperCompPick = document.getElementById("paper-comppick")
const scissorCompPick = document.getElementById("scissors-comppick");
const rockCompPick = document.getElementById("rock-comppick");
const tieResult = document.getElementById("tie-result");
let computerChoice
let userChoice

ruleButton.addEventListener("click", () => {
    // gameHeader.classList.add("absolute");
    // gameFooter.classList.add("absolute");
    // triangleGameButtons.classList.add("absolute");
    document.getElementById('rules-section').setAttribute("open", "");
    document.getElementById('rules-section').style.display = 'grid';
    gameBody.classList.add('white');
})

rulesCloseButton.addEventListener("click", () => {
    gameHeader.classList.remove("hidden");
    gameFooter.classList.remove("hidden");
    triangleGameButtons.classList.remove("hidden");
    document.getElementById('rules-section').removeAttribute("open");
    document.getElementById('rules-section').style.display = 'none';
    gameBody.classList.remove('white');
})
let bgWhiteForMobile = window.matchMedia("(max-width: 460px)");

function toggleElements() {
    if (bgWhiteForMobile.matches && rulesSection.style.display === 'grid') {
        document.getElementById('header').style.display = 'none';
        document.getElementById('footer').style.display = 'none';
        document.getElementById('tri').style.display = 'none';
    } else {
        document.getElementById('header').style.display = '';
        document.getElementById('footer').style.display = '';
        document.getElementById('tri').style.display = '';
    }
}
ruleButton.addEventListener("click", toggleElements);
rulesCloseButton.addEventListener("click", toggleElements);

paperButton.addEventListener("click", () => {
    triangleGameButtons.classList.add("hidden");
    resultSection.classList.add("visible");
    scissorUserPick.classList.add("invisible");
    rockUserPick.classList.add("invisible");
    userChoice = "paper";
    setTimeout(generateComputerChoice, 500);
})
scissorButton.addEventListener("click", () => {
    triangleGameButtons.classList.add("hidden");
    resultSection.classList.add("visible");
    paperUserPick.classList.add("invisible");
    rockUserPick.classList.add("invisible");
    userChoice = "scissors";
    setTimeout(generateComputerChoice, 500);
})
rockButton.addEventListener("click", () => {
    triangleGameButtons.classList.add("hidden");
    resultSection.classList.add("visible");
    scissorUserPick.classList.add("invisible");
    paperUserPick.classList.add("invisible");
    userChoice = "rock";
    setTimeout(generateComputerChoice, 500);
})
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        // display rock
        rockCompPick.classList.remove("compchoice");
        computerChoice = "rock";
    }
    if (randomNumber === 2) {
        // display paper
        paperCompPick.classList.remove("compchoice");
        computerChoice = "paper";
    }
    if (randomNumber === 3) {
        // display scissor
        scissorCompPick.classList.remove("compchoice");
        computerChoice = "scissor";
    }
}
function getResult() {
    if (computerChoice === userChoice) {
        // this results in a tie
        tieResult.classList.add("visible");
    }
}