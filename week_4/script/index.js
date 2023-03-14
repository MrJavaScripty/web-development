import DialogProperties from "./dialog.js"

document.addEventListener("DOMContentLoaded", () => {
    DialogProperties.setupDialog()
})

function handleClick(e, score) {
    const newScore = score + 1;
    console.log(`Hello ${e.target.nodeName}`);

    if (e.target.nodeName === "BUTTON") {
        window.alert(score)
    }

    return newScore
}

let score = 0;
// const x = () => {}
    
const confirmButtonText = document.getElementById("confirm-btn-text")
confirmButtonText.addEventListener("click", (event) => {
    const newScore = handleClick(event, score);
    score = newScore
})

const confirmButton = document.getElementById("confirm-btn")
confirmButton.addEventListener("click", (event) => handleClick(event, score))