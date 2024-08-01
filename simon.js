let userSeq = [];
let gameSeq = [];

//let hs = document.querySelector("#hs");

let btns = ['yellow', 'blue', 'red', 'green'];

let started = false;
let level = 0;

let txt = document.querySelector("h2");

function gameFlash(btn){
    btn.classList.add("gameFlash")
    setTimeout(function () {
        btn.classList.remove("gameFlash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    txt.innerText = 'Level ' + level;

    //random
    let randIdx = Math.floor(Math.random()*4);
    let randClr = btns[randIdx];
    let randBtn = document.querySelector(`.${randClr} `);
    // console.log(randIdx);
    // console.log(randClr);
    // console.log(randBtn);
    gameSeq.push(randClr);
    console.log(gameSeq);
    gameFlash(randBtn);
}

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Started");
        started = true;
        levelUp();  
    }
    

      
})

function checkAns(idx){ 
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        txt.innerHTML = `Game Over! Your Score Was <b>${level}</b> <br> Press Any Key to Start`;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"; 
        },150)
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this; 
    userFlash(btn);

    userClr = btn.getAttribute("id");
    userSeq.push(userClr);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}