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


function flipCard(){

    if(lock){
        return;
    }
    
    if(this === first){
        return;
    }
    
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
            getBio(first.dataset.name);
            if(matches === 6){
                setTimeout(function(){  gameOverScreen();
            }, 15000);
               
            }
        }else{
            lock = true;
            setTimeout(() =>{
                first.classList.remove('flip');
                second.classList.remove('flip');
                disableCards();
            }, 1200);
        } 
}

function getBio(){
    if(first.dataset.name == "AL"){
        getAL();
    } else if(first.dataset.name == "MC"){
        getMC();
    }else if(first.dataset.name == "FN"){
        getFN();
    } else if(first.dataset.name == "GH"){
       getGH();
    }else if(first.dataset.name == "RF"){
        getRF();
    }else if(first.dataset.name== "MY"){
      getMY();
    }else if(first.dataset.name == "SP"){
        getSP();
    } else if(first.dataset.name == "MA"){
        getMA();
    }else if(first.dataset.name == "FK"){
        getFK();
    } else if(first.dataset.name == "AF"){
       getAF();
    }else if(first.dataset.name == "MS"){
        getMS();
    }else if(first.dataset.name== "MU"){
      getMU();
    }else if(first.dataset.name == "HT"){
        getHT();
    } else if(first.dataset.name == "JA"){
        getJA();
    }else if(first.dataset.name == "RP"){
        getRP();
    } else if(first.dataset.name == "LK"){
       getLK();
    }else if(first.dataset.name == "MJ"){
        getMJ();
    }else if(first.dataset.name== "BW"){
      getBW();
    }
}

function getAL() {
    setTimeout(function(){ document.getElementById("modal").style.display = "block";
}, 750);
    

  }
function getMC() {
    setTimeout(function(){ document.getElementById("modal1").style.display = "block";
}, 750);
  }

function getFN(){
    setTimeout(function(){ document.getElementById("modal2").style.display = "block";
}, 750);
}

function getGH(){
    setTimeout(function(){ document.getElementById("modal3").style.display = "block";
}, 750);
}

function getRF(){
    setTimeout(function(){ document.getElementById("modal4").style.display = "block";
}, 750);
}

function getMY(){
    setTimeout(function(){ document.getElementById("modal5").style.display = "block";
}, 750);
}
function getSP() {
    setTimeout(function(){ document.getElementById("modal6").style.display = "block";
}, 750);
  }

function getMA() {
    setTimeout(function(){ document.getElementById("modal7").style.display = "block";
}, 750);
  }

function getFK(){
    setTimeout(function(){ document.getElementById("modal8").style.display = "block";
}, 750);
}

function getAF(){
    setTimeout(function(){ document.getElementById("modal9").style.display = "block";
}, 750);
}

function getMS(){
    setTimeout(function(){ document.getElementById("modal10").style.display = "block";
}, 750);
}

function getMU(){
    setTimeout(function(){ document.getElementById("modal11").style.display = "block";
}, 750);
}
function getHT() {
    setTimeout(function(){ document.getElementById("modal12").style.display = "block";
}, 750);
  }

function getJA() {
    setTimeout(function(){ document.getElementById("modal13").style.display = "block";
}, 750);
  }

function getRP(){
    setTimeout(function(){ document.getElementById("modal14").style.display = "block";
}, 750);
}

function getLK(){
    setTimeout(function(){ document.getElementById("modal15").style.display = "block";
}, 750);
}

function getMJ(){
    setTimeout(function(){ document.getElementById("modal16").style.display = "block";
}, 750);
}

function getBW(){
    setTimeout(function(){ document.getElementById("modal17").style.display = "block";
}, 750);
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

