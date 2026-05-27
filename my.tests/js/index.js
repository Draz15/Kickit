let choices = ["rock", "paper", "scissors"]
let playerchoice = document.getElementById("player")
let computer = document.getElementById("computer")
let finalcontent = document.getElementById("final")
let Computerpoints = document.getElementById("Cpoints")
let Playerpoints = document.getElementById("Ppoints")
let result = ""
let Com = 0;
let Play = 0;

playgame = (x) => {
    let computerchoice = choices[Math.floor((Math.random() * 3))]
    computer.innerText = "computer: " + computerchoice
    playerchoice.textContent = "player: " + x
    if (computerchoice === x) {
        result = "it's a tie"
        finalcontent.style.color = "#001f"
    }
    else {
        switch (x) {
            case "paper": computerchoice === "rock" ? result = "YOU WIN MY BITCHI😚" : result = "YOU LOST C'MON BABE🥵";
                break;
            case "scissors": computerchoice === "paper" ? result = "YOU WIN MY BITCHI😚" : result = "YOU LOST C'MON BABE🥵";
                break;
            case "rock": computerchoice === "scissors" ? result = "YOU WIN MY BITCHI😚" : result = "YOU LOST C'MON BABE🥵";
                break;
        }
    }
    finalcontent.textContent = result
    switch (result) {
        case "YOU WIN MY BITCHI😚": Play++;
        finalcontent.style.color = "green"
        Playerpoints.innerHTML = Play
        break;
        case "YOU LOST C'MON BABE🥵": Com++;
        Computerpoints.innerText = Com
        finalcontent.style.color = "#f00f"
            break;
    }
    
}