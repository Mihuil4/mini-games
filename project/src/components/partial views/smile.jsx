document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<div class="text" id="helloText">Нажмите enter</div>');
var helloText = document.getElementById('helloText');
helloText.style.display = 'block';
helloText.style.textAlign = 'center';
helloText.style.fontSize = 72+"pt";
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/smile.png" id="pig">');
var pig = document.getElementById('pig');
pig.style.position = 'fixed';
pig.style.display = 'none';
var mouseListener = function(event){mouseMoveFunc(event)};
document.addEventListener("mousemove", mouseListener);
function mouseMoveFunc(event){
    pig.style.left=event.clientX - 380 + 'px' ;//380
    pig.style.top=event.clientY - 240 + 'px' ;//240
    checkCollision();
}
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/list.png" id="orange">');
var orange = document.getElementById('orange')
orange.style.position = 'fixed';
spawnOrange();
orange.style.display = 'none';
function spawnOrange(){
    //while (Math.sqrt(Math.pow(pig.offsetLeft - orange.offsetLeft,2) + 
        //Math.pow(pig.offsetTop - orange.offsetTop,2)) <128){
    orange.style.left=Math.random()*(window.innerWidth-500) + 'px';//500
    console.log("log");
    orange.style.top=Math.random()*(window.innerHeight-300) + 'px';//300
    //}
}

    function checkCollision(){
        console.log();
        if (
            Math.sqrt(Math.pow(pig.offsetLeft - orange.offsetLeft,2) + 
            Math.pow(pig.offsetTop - orange.offsetTop,2)) <128
        )
    {
        spawnOrange();
        setScore(score);
        score=score+1
    }
}
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div class="text" id="scoreObj"></div>');
var scoreObj= document.getElementById('scoreObj');
scoreObj.style.textAlign = "center";
scoreObj.style.fontSize = 72+"pt";
var score=0;
scoreObj.style.display = 'none';
setScore(0);
function setScore(scoreToSet){
    scoreObj.innerHTML = "Очки: "+scoreToSet;
}

var enterListener = function(event){startGame(event)};
document.addEventListener("keydown", enterListener);

function startGame(event){
    if (event.keyCode ==13){
        score = 0;
        setScore(0);

        console.log(helloText);
        helloText.style.display = 'none';
        scoreObj.style.display = 'block';
        orange.style.display = 'block';
        pig.style.display = 'block';

        document.removeEventListener('keydown', enterListener);
        document.addEventListener("mousemove", mouseListener);
        spawnOrange();
        setScore(0);
        timerObj.style.display = 'block';
        timer = 15;
        setTimer(timer);
        intervalId = setInterval(function(){cntdwn();}, 1000);
    }
}
var intervalId;
intervalId = setInterval(function(){cntdwn();}, 1000);
clearInterval(intervalId);
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<div class="text" id="timerObj"></div>');
var timerObj = document.getElementById('timerObj');
timerObj.style.display = 'block';
timerObj.style.textAlign = 'center';
timerObj.style.fontSize = 72+"pt";
function setTimer(timeToSet){
    console.log(timer);
    timerObj.innerHTML = "время: "+ timeToSet;
}
 function cntdwn(){
     timer-=1;
     setTimer(timer);
     if (timer==0){
         clearInterval(intervalId);
        document.removeEventListener('mousemove', mouseListener);
        helloText.innerHTML="конец игры, результат: "+ score+ ". <br> нажмите enter чтобы продолжить играть.<br> нажмите esc чтобы вернуться в меню";
        helloText.style.display = 'block';
        pig.style.display = 'none';
        orange.style.display = 'none';
        scoreObj.style.display = 'none';
        timerObj.style.display = 'none';
        document.addEventListener("keydown", enterListener);
    }
}
return(

)
