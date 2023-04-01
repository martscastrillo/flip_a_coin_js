"use strict";

const coin = document.querySelector('.coin');
const flipBtn = document.querySelector('.flip_button');
const resetBtn = document.querySelector('.reset_button');
const headsCount = document.querySelector('.heads_count');
const tailsCount = document.querySelector('.tails_count');

let heads = 0;
let tails = 0;

flipBtn.addEventListener("click", ( ) =>{
    let i = Math.floor(Math.random()*2);
    coin.style.animation = "none";
    if(i){
        setTimeout(() => {
            coin.style.animation = "spin_tails 3s forwards";
        }, 100);
        tails++;
    }
    else{
        setTimeout(() => {
            coin.style.animation = "spin_heads 3s forwards";
        }, 100);
        heads++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
})
function updateStats() {
  
    headsCount.innerHTML =`Heads: ${heads}`;
    tailsCount.innerHTML =`Tails: ${tails}`;
}
function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    }, 3000);
}
resetBtn.addEventListener("click", () =>{
    
    heads = 0;
    tails = 0;
    updateStats();
})