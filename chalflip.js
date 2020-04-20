const cards = document.querySelectorAll('.card');

let isFlipped = false
let first, second;
let lock = false;
let matches = 0;

(function shuffle(){
    cards.forEach(card => {
        let randoPosition = Math.floor(Math.random () * 12);
        card.style.order = randoPosition;
    })
})();

var counter = 50;
setInterval( function(){
    counter--;
    if(counter >=0){
        id = document.getElementById('count');
        id.innerHTML = 'Time Remaining: ' + counter;
    }
            
    if(counter ===0){
        document.getElementById("game-over").style.display = "block";
    }
            
            
}, 1000);

var flips = 0;
function setFlips(){
    flips++;
    id2 = document.getElementById('flipper');
    id2.innerHTML = 'Flips: ' + flips;
}

function flipCard(){

    if(lock){
        return;
    }
    
    if(this === first){
        return;
    }
    
    setFlips();
    this.classList.add('flip');
    
    if(!isFlipped){
        isFlipped = true;
        first = this;
    }else{
        isFlipped = false;
        second = this;
        isMAtch();
    }
}


function isMAtch(){
    if(first.dataset.name === second.dataset.name){
            first.removeEventListener('click', flipCard);
            second.removeEventListener('click', flipCard);
            matches++;
            if(matches === 9){
                gameWinScreen();
            }
        }else{
            lock = true;
            setTimeout(() =>{
                first.classList.remove('flip');
                second.classList.remove('flip');
                disableCards();
            }, 800);
        } 
}

function disableCards(){
    isFlipped = false;
    lock = false;
    first = null;
    second = null;
}


cards.forEach(card => card.addEventListener('click', flipCard));

function gameOverScreen() {
  document.getElementById("game-over").style.display = "block";
}

function gameWinScreen() {
  document.getElementById("winner").style.display = "block";
}

