var IDdisplayX = document.getElementById("displayX");
var IDdisplayY = document.getElementById("displayY");
var IDcursorX = document.getElementById("cursorX");
var IDcursorY = document.getElementById("cursorY");
var IDrobotX = document.getElementById("robotX");
var IDrobotY = document.getElementById("robotY");

var IDboxToRun = document.getElementById("boxToRun");
var IDrobot = document.getElementById("robot");

function sizeDisplay(){
    displayX = IDboxToRun.clientWidth;
    displayY = IDboxToRun.clientHeight;
    IDdisplayX.textContent = 'X size: ' + displayX + 'px';
    IDdisplayY.textContent = 'Y size: ' + displayY + 'px';
}
sizeDisplay();
document.getElementsByTagName("BODY")[0].onresize = function() {sizeDisplay()};

IDboxToRun.addEventListener('mousemove', function(e){
    var cursorX = (e.clientX);
    var cursorY = (e.clientY-50);
	IDcursorX.textContent = 'X cursor: ' + cursorX + 'px';
    IDcursorY.textContent = 'Y cursor: ' + cursorY + 'px';

    var robotSizeX = IDrobot.clientWidth;
    var robotSizeY = IDrobot.clientHeight;
    var robotX = displayX-cursorX-robotSizeX/2;
    var robotY = displayY-cursorY-robotSizeY/2;
    function robotRun(){
        if(robotX > 0 && robotX < displayX-robotSizeX){//bug in border of the screen
            robot.style.marginLeft = robotX + "px";
            IDrobotX.textContent = 'X robot: ' + robotX + 'px';
        }
        if(robotY > 0 && robotY < displayY-robotSizeY){
            robot.style.marginTop = robotY + "px"; 
            IDrobotY.textContent = 'Y robot: ' + robotY + 'px';
        }
    }

    var startRandomX = displayX/2 - displayX*0.3/2;
    var endRandomX = displayX/2 + displayX*0.3/2;
    var startRandomY = displayY/2 - displayY*0.3/2;
    var endRandomY = displayY/2 + displayY*0.3/2;
    if((cursorX > startRandomX) == false || (cursorX < endRandomX) == false || (cursorY > startRandomY) == false || (cursorY < endRandomY) == false){
        robotRun();
    }else{
        // setInterval(function(){
        //     console.log('Test');
        // }, 1000)
        // setInterval(function(){ console.log("Hello"); }, 3000); // Problem with loop only in that condition, if not else STOP! Lack update in some time on loop.
        var cursorX = Math.floor(Math.random() * (endRandomX+endRandomX - startRandomX-startRandomX/2.5) + startRandomX-startRandomX/2.5);
        var robotX = displayX-cursorX-robotSizeX/2;
        var cursorY = Math.floor(Math.random() * (endRandomY+endRandomY - startRandomY-startRandomY) + startRandomY-startRandomY);
        var robotY = displayY-cursorY-robotSizeY/2;
        robotRun();
    }
})
