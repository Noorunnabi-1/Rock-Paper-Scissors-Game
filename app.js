let userScore = 0;
let compScore = 0;


/*------------ access all images dives  -----------*/
const choices = document.querySelectorAll(".choice");
/*------------ access the massage -----------*/
const msg = document.querySelector("#msg");

/*------------ access user score and comp score -----------*/
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


// generate Computer choice
const genCompChoice = () => {
    // rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    // to generate any random number from 0 to 2 (0,1,2) means comp choice....................
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// Draw Game function
const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "#081b31";

}


// Show Winner function
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "rgb(145, 49, 49)";
    }
}

/*------------ Computer choice  -----------*/
const playGame = (userChoice) => {
    // generate Computer choice call
    const compChoice = genCompChoice();
    // Winning conditions
    if (userChoice === compChoice) {
        // Draw Game function call
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        // Show Winner function call
        showWinner(userWin, userChoice, compChoice);
    }


};


/*------------ User choice  -----------*/
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});