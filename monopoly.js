//initialize game and set variable
function createBkgroundCanvas(canvas) {
    let c = canvas.getContext("2d");
    let drawBackground = function(){
        var img = new Image(c.width, c.width);
        img.onload = function() {
            c.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = 'images/BuildingLocation.jpg';
    }
    let clear = function() {
        c.clearRect(0,0, canvas.width, canvas.height);
    };

    return {
        drawBackground: drawBackground,
        clear: clear
    }
}

function createPlayerCanvas(canvas) {
    
    let c = canvas.getContext("2d");

    let drawPlayer = function(x, y) {
        var img = new Image();
        img.onload = function() {
            c.drawImage(img, x, y);
        };
        img.src = 'images/MatchStickMan.png';
    };
    

    let clear = function() {
        c.clearRect(0,0, canvas.width, canvas.height);
    };


    return {
        drawPlayer: drawPlayer,
        clear: clear
    }
}
var canvasWidth = document.getElementById("canvas1").width;
var canvasHeight = document.getElementById("canvas1").height;
console.log(canvasWidth);
console.log(canvasHeight);
var buildingLoc = [
                    {x: 958, y:170}, 
                    {x:750, y:380}, 
                    {x:610, y:380}, 
                    {x:300, y:320}, 
                    {x:550, y:320},
                    {x:550, y:220},
                    {x:630, y:240},
                    {x:725, y:220},
                    {x:820, y:280},
                    {x: 830, y:200},
                    {x: 898, y:125}
                    ];
var app;
var playerCanvas;
var locNum = 0;
window.onload = function() {
    var energy;
    var intelligence;
    var happiness;
    var playerLoc;
    app = createBkgroundCanvas(document.getElementById("canvas1"));
    //set canvas1 to window size
    app.drawBackground();
    playerCanvas = createPlayerCanvas(document.getElementById("canvas2"));
    //set canvas2 to window size
    playerCanvas.drawPlayer(buildingLoc[locNum].x, buildingLoc[locNum].y);
    $("#rollDice").click(updatePlayer);

};
//roll dice. Every time move forward, roll dice
function rollDice(){
    
}
function updatePlayer() {
    playerCanvas.clear();
    playerCanvas.drawPlayer(buildingLoc[locNum].x, buildingLoc[locNum].y);
    
    locNum = locNum + 1;
    locNum = locNum % buildingLoc.length;
    
}

function getDice(){

}

function resetDice(){

}
