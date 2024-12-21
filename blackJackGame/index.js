let firstCard = 11
let secondCard = 9
let sum = firstCard + secondCard
let hasBlacjack = false
let isAlive = false
let message = ""
let messageEl =  document.getElementById('message-el')
console.log(messageEl)

function startGame(){
    if(sum <= 20 ){
        message= "Do you want to draw a new card";
    }else if(sum == 21){
        message ="Wohoo! You're got Balckjack!";
    }else{
        message = "You've out of the game";
    }
    // messageEl.textContent = message
     
}
 