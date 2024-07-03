let userScore = 0;
let compScore = 0;

/*------------ access all images dives  -----------*/
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked!", userChoice);
    });
});