const rulesSection = document.getElementById("rules-section");
const ruleButton = document.getElementById("rule-button");
const gameHeader = document.getElementById("header");
const gameFooter = document.getElementById("footer");
const triangleGameButtons = document.getElementById("tri");
const gameBody = document.getElementById("body");
const rulesCloseButton = document.getElementById("rules-close-button");

ruleButton.addEventListener("click", () => {
    gameHeader.classList.add("absolute");
    gameFooter.classList.add("absolute");
    triangleGameButtons.classList.add("absolute");
    document.getElementById('rules-section').style.display = 'grid';
    gameBody.classList.add('white');
})
rulesCloseButton.addEventListener("click", () => {
    gameHeader.classList.remove("hidden");
    gameFooter.classList.remove("hidden");
    triangleGameButtons.classList.remove("hidden");
    document.getElementById('rules-section').style.display = 'none';
    gameBody.classList.remove('white');
})