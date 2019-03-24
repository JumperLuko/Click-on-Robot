var IDboxToRun = document.getElementById("boxToRun");
var IDcursorX = document.getElementById("cursorX");
var IDcursorY = document.getElementById("cursorY");
var IDdisplayX = document.getElementById("displayX");
var IDdisplayY = document.getElementById("displayY");
var IDrobot = document.getElementById("robot");
IDboxToRun.addEventListener('mousemove', function(e){
    cursorX = e.clientX;
    cursorY = e.clientY-50;
	IDcursorX.textContent = 'X cursor: ' + cursorX + 'px';
    IDcursorY.textContent = 'Y cursor: ' + cursorY + 'px';
    robot.style.marginTop = cursorY + "px"; 
    robot.style.marginLeft = cursorX + "px";
})

function sizeDisplay(){
    IDdisplayX.textContent = 'X size: ' + IDboxToRun.clientWidth + 'px';
    IDdisplayY.textContent = 'Y size: ' + IDboxToRun.clientHeight + 'px';
}
sizeDisplay();
window.onresize = IDboxToRun.sizeDisplay;