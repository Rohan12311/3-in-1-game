let boxs = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let NewGame = document.querySelector("#NewGame");
let msg = document.querySelector("#msg");
let MsgContainer = document.querySelector(".msg-container");

let turnX = true ;  // yaha pe sirf do hi player hai ek "X" aur dusra "O" yani value ture hogi ya falase
// creating 2D array
const winPattern = [
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true
        }
        box.disabled = true;
        checkWinner();
    });
    });
const resetGame=()=>{   // reset the game function
    turnX=true;
    enableboxs();
    MsgContainer.classList.add("hide");

};
const enableboxs=()=>{       //  move on to the new game function
    for(let box of boxs){
        box.disabled=false;
        box.innerText=""
    }
}
const disableButton =()=>{   // After winning the match all button will disable function
    for(let box of boxs){
        box.disabled=true;
    }
}


const ShowWinner=(winner)=>{    // show the Winner function
        msg.innerText=`congratulation , Winner is ${winner}`
        MsgContainer.classList.remove("hide")
}


const checkWinner =()=>{        // check the Array and diside the Winner
    for(let pattern of winPattern){// (let pattern=0;pattern<=winPattern ;pattern++)
            let pos1Val =boxs[pattern[0]].innerText
            let pos2Val =boxs[pattern[1]].innerText
            let pos3Val =boxs[pattern[2]].innerText

            if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
                if(pos1Val===pos2Val && pos2Val===pos3Val){
                    disableButton();
                    ShowWinner(pos1Val);
                }
            }
     }
}
NewGame.addEventListener("click",(enableboxs)); // event on the new button
reset.addEventListener("click",(resetGame));  // event on the reset button

