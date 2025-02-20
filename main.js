const rulesSection = document.getElementById("rules-section");
const ruleButton = document.getElementById("rule-button");
const gameHeader = document.getElementById("header");
const gameFooter = document.getElementById("footer");
const triangleGameButtons = document.getElementById("tri");
const gameBody = document.getElementById("body");
const rulesCloseButton = document.getElementById("rules-close-button");

ruleButton.addEventListener("click", () => {
    // gameHeader.classList.add("absolute");
    // gameFooter.classList.add("absolute");
    // triangleGameButtons.classList.add("absolute");
    document.getElementById('rules-section').setAttribute("open", "");
    document.getElementById('rules-section').style.display = 'grid';
    document.getElementById('body').setAttribute("dark", "");
    gameBody.classList.add('white');
})

rulesCloseButton.addEventListener("click", () => {
    gameHeader.classList.remove("hidden");
    gameFooter.classList.remove("hidden");
    triangleGameButtons.classList.remove("hidden");
    document.getElementById('rules-section').removeAttribute("open");
    document.getElementById('body').removeAttribute("dark");
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
rulesCloseButton.addEventListener("click", toggleElements)