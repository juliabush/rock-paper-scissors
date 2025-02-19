const rulesSection = document.getElementById("rules-section");
const ruleButton = document.getElementById("rule-button");
const gameHeader = document.getElementById("header");
const gameFooter = document.getElementById("footer");
const triangleGameButtons = document.getElementById("tri");
const gameBody = document.getElementById("body");
const rulesCloseButton = document.getElementById("rules-close-button");
const mediaQuery = window.matchMedia("(max-width: 414px)");


ruleButton.addEventListener("click", () => {
    gameHeader.classList.add("absolute");
    gameFooter.classList.add("absolute");
    triangleGameButtons.classList.add("absolute");
    document.getElementById('rules-section').style.display = 'grid';
    gameBody.classList.add('white');
})
function handleScreenSizeChange(event) {
    if (event.matches) {  // If screen width is 414px or smaller
        console.log("Viewport is smaller than 414px");
        document.body.style.backgroundColor = "lightblue"; // Change background color
    } else {  // If screen width is larger than 414px
        console.log("Viewport is 414px or larger");
        document.body.style.backgroundColor = ""; // Reset background color
    }
    const mediaQuery = window.matchMedia("(max-width: 414px)");
    handleScreenSizeChange(mediaQuery);
    mediaQuery.addEventListener("change", handleScreenSizeChange);

}

rulesCloseButton.addEventListener("click", () => {
    gameHeader.classList.remove("hidden");
    gameFooter.classList.remove("hidden");
    triangleGameButtons.classList.remove("hidden");
    document.getElementById('rules-section').style.display = 'none';
    gameBody.classList.remove('white');
})