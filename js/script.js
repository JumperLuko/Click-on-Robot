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
    cursorX = (e.clientX);
    cursorY = (e.clientY-50);
	IDcursorX.textContent = 'X cursor: ' + cursorX + 'px';
    IDcursorY.textContent = 'Y cursor: ' + cursorY + 'px';

    robotSizeX = IDrobot.clientWidth;
    robotSizeY = IDrobot.clientHeight;
    robotX = displayX-cursorX-robotSizeX/2;
    robotY = displayY-cursorY-robotSizeY/2;

    if(robotX > 0 && robotX < displayX-robotSizeX){
        robot.style.marginLeft = robotX + "px";
        IDrobotX.textContent = 'X robot: ' + robotX + 'px';
    }
    if(robotY > 0 && robotY < displayY-robotSizeY){
        robot.style.marginTop = robotY + "px"; 
        IDrobotY.textContent = 'Y robot: ' + robotY + 'px';
    }
})

