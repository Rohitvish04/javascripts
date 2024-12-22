let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let score =0
console.log(homeEl)
console.log(guestEl)

homeEl.textContent = score
guestEl.textContent = score 

function homeAddOne() {
     
    score += 1
   homeEl.textContent = score
}

function homeAddTwo(){
    score += 2
    homeEl.textContent = score
}

function homeAddThree(){
    score += 3
    homeEl.textContent = score
}

function homeRenderReset(){
    score = 0
    homeEl.textContent = score

}
// guest 
function guestAddOne() {
    score += 1
   guestEl.textContent = score
}

function guestAddTwo(){
    score += 2
    guestEl.textContent = score
}

function guestAddThree(){
    score += 3
    guestEl.textContent = score
}

function guestRenderReset(){
    score = 0
    guestEl.textContent = score
    
}