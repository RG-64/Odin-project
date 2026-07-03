var humanScore=0;
var computerScore=0;
const humanDiv=document.querySelector(".humanScore");
const botDiv=document.querySelector(".botScore");
const list=document.querySelector("ul");
const result=document.querySelector(".result");
const botImage=document.querySelector("#botImage");
const humanImage=document.querySelector(".humanImage");
const final=document.querySelector(".final");

function getComputerChoice(){
        let num=Math.floor(Math.random()*3);
        switch(num){
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        }
}



function playRound(humanChoice,computerChoice){
    humanImage.src=`./images/${humanChoice}.jpeg`;
    botImage.src=`./images/${computerChoice}.jpeg`
    if(humanChoice=="rock"){
        if(computerChoice=="rock"){
            result.textContent="Equality, no one wins";
        }
        else if(computerChoice=="paper"){
            result.textContent="You lose! paper beats rock";
            computerScore++;
        }
        else{
            result.textContent="You win! rock beats scissors";
            humanScore++;
        }
    } else if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            result.textContent="You win! paper beats rock";
            humanScore++;
        }
        else if(computerChoice=="paper"){
            result.textContent="Equality, no one wins";
        }
        else{
            result.textContent="You lose! scissors beats paper";
            computerScore++;
        }
    }
    else{
        if(computerChoice=="rock"){
            result.textContent="You lose! rock beats scissors";
            computerScore++;
        }
        else if(computerChoice=="paper"){
            result.textContent="You win! scissors beats paper";
            humanScore++;
        }
        else{
            result.textContent="Equality, no one wins";
        } 
    }
}

list.addEventListener("click",(event)=>{
    let target=event.target;
    if(target.nodeName!="UL")
    {
        playRound(target.id,getComputerChoice());
        humanDiv.textContent=`${humanScore}`;
        botDiv.textContent=`${computerScore}`;
        if(humanScore==5||computerScore==5)
        {
            botImage.style.visibility="hidden";
            humanImage.style.visibility="hidden";
            document.querySelector(".player").style.visibility="hidden";
            document.querySelector(".computer").style.visibility="hidden";
            final.textContent=`The winner is... ${(computerScore>humanScore?"the computer":(computerScore==humanScore?"no one":"you"))}`;
        }
    }
})

