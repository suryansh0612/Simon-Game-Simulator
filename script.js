let gameseq = [];
let userseq = [];
let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("game has been started");
        document.querySelector("h2").innerText = "(press the box which gets blinked)";
        setTimeout(() => {
            document.querySelector("h2").innerText = "LEVEL 1";
            setTimeout(nextLevel, 1000);
        }, 2000);

        started = true;
    }
});

function nextLevel() {
    level++;
    document.querySelector("h2").innerText = `LEVEL ${level}`;
    userseq = [];
    gettingrandom();
    blinksequence();
}

function gettingrandom() {
    let rand = Math.random();
    if (rand < 0.25) {
        gameseq.push(document.querySelector('.btn1'));
    } else if (rand < 0.5) {
        gameseq.push(document.querySelector('.btn2'));
    } else if (rand < 0.75) {
        gameseq.push(document.querySelector('.btn3'));
    } else {
        gameseq.push(document.querySelector('.btn4'));
    }
}

function blinksequence() {
    gameseq.forEach((button, index) => {
        setTimeout(() => {
            blinkbutton(button);
        }, index * 1000);
    });
}

function blinkbutton(element) {
    let originalColor = element.style.backgroundColor;
    element.style.backgroundColor = "white";
    setTimeout(() => {
        element.style.backgroundColor = originalColor;
    }, 150);
}

document.querySelector(".btn1").addEventListener("click", afterclick);
document.querySelector(".btn2").addEventListener("click", afterclick);
document.querySelector(".btn3").addEventListener("click", afterclick);
document.querySelector(".btn4").addEventListener("click", afterclick);

function afterclick(event) {
    userseq.push(event.target);
    let currentIndex = userseq.length - 1;
    if (userseq[currentIndex] !== gameseq[currentIndex]) {
        document.querySelector("h2").innerText = "OOPS! WRONG BOX CLICKED";
        setTimeout(() => {
            resetGame();
        }, 2500);
        return;
    }
    if (userseq.length === gameseq.length) {
        console.log("Level complete!");
        setTimeout(nextLevel, 1000);
    }
}

function resetGame() {
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
    document.querySelector("h2").innerText = "Press any key to start Again";
}





// function gettingrandom(){
// let rand= Math.random()
// if(rand<0.25){
//     blinkbutton(document.querySelector('.btn1'))
// }
// else if(rand<0.5){
//     blinkbutton(document.querySelector('.btn2'))
// }
// else if(rand<0.75){
//     blinkbutton(document.querySelector('.btn3'))
// }
// else{
//     blinkbutton(document.querySelector('.btn4'))
// }
// }
// gettingrandom()
