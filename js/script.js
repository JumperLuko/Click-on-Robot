var boxToRun = document.getElementById("boxToRun");
var cursorX = document.getElementById("cursorX");
var cursorY = document.getElementById("cursorY");
var displayX = document.getElementById("displayX");
var displayY = document.getElementById("displayY");
document.body.addEventListener('mousemove', function(e){
	cursorX.textContent = 'X Cursor: ' + e.clientX + 'px';
    cursorY.textContent = 'Y Cursor: ' + (e.clientY-50) + 'px';
})

function sizeDisplay(){
    displayX.textContent = 'X size: ' + boxToRun.clientWidth + 'px';
    displayY.textContent = 'Y size: ' + boxToRun.clientHeight + 'px';
}
sizeDisplay()
setInterval(sizeDisplay, 1000);

var runRobot = function() {
    var robot = document.getElementById("robot");
    robot.style.marginTop = 300 + "px"; 
    robot.style.marginLeft = 300 + "px"; 
    // var pos = 0;
    // var id = setInterval(frame, 5);
    // function frame() {
    //     if (pos == 350) {
    //     clearInterval(id);
    //     } else {
    //     pos++; 
    //     robot.style.marginTop = pos + "px"; 
    //     robot.style.marginLeft = pos + "px"; 
    //     }
    // }
}
boxToRun.addEventListener('mouseover', runRobot);