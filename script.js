function makeBubble(){
    var clutter = "";


for( let i = 1 ; i <= 168 ; i++){
    var ran = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${ran}</div>`;
}


document.querySelector('#pbtm').innerHTML = clutter;


}

var timer = 60;
function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#timerValue').textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector('#pbtm').innerHTML = `<h1>
                                                            Game Over 
                                                            </h1>`;
        }
        
    }, 1000)
}
var hitRan = 0;
function getNewHit(){
    hitRan = Math.floor(Math.random()*10);
    document.querySelector('#hitVal').textContent = hitRan;
}

var score = 0;
function incScore(){
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}


document.querySelector('#pbtm').addEventListener('click', (value) => {
    var clickNum = Number(value.target.textContent);
    if(clickNum === hitRan){
        incScore();
        makeBubble();
        getNewHit();
    }
})


getNewHit();
runTimer();
makeBubble();