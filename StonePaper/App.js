let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const Msg = document.querySelector("#msg");
const MyUserscore = document.querySelector("#UserScore");
const Computerscore = document.querySelector("#computerScore");



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoise = choice.getAttribute("id"); // yaha pe hum user ki value ke aandar "id" ki value store kar rahe hai aager id value "super" hoti to user ki value bhi vahi hoti"
        playGame(userChoise); // playGame ke andaar userChoise ki value dala hai
    })
})

const genComputerChoice =()=>{
    const option = ["rock","paper","scissors"]
    const randIdx =Math.floor(Math.random()*3);// yaha pe ek random no. genrate kiya gaya hai jiski value index pe value hai
    return option[randIdx];
}

const drawGame =()=>{
    Msg.innerText = `Game is Draw Play Again`;
    Msg.style.backgroundColor = "Black"
}

const ShowWinner = (userWin,userChoise,ComputerChoice)=>{
    if(userWin){
        Msg.innerText = `You Win your ${userChoise} beats ${ComputerChoice}`;
        Msg.style.backgroundColor = "Green";
        userScore++;
        MyUserscore.innerText=userScore
    }
    else{
        Msg.innerText = `You lose ${ComputerChoice} beats your ${userChoise}`;
        Msg.style.backgroundColor = "red"
        compScore++;
        Computerscore.innerText=compScore
    }
}

const playGame =(userChoise)=>{
    // genrate computer choice  -> moduler way of programing
    const ComputerChoice =genComputerChoice();
    if(userChoise === ComputerChoice){
        drawGame();
    }
    else {
        let userWin =true;
        if(userChoise ==="rock"){
            userWin = ComputerChoice === "paper"? false :true;
        }else if (userChoise ==="paper"){
            userWin = ComputerChoice === "scissors"? false  :true;
        }
        else{
            userWin = ComputerChoice === "rock"? false  :true;
        }
        ShowWinner (userWin,userChoise,ComputerChoice);
    }
}