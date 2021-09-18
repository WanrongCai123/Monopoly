//initialize game and set variable
function createBkgroundCanvas(canvas) {
    let c = canvas.getContext("2d");
    let drawBackground = function(){
        var img = new Image();
        img.onload = function() {
            c.drawImage(img, 0, 0);
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
    console.log("1");
    let drawPlayer = function() {
        var img = new Image();
        img.onload = function() {
            c.drawImage(img, 0, 0);
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
var buildingLoc = [{x:600, y:300}, {x:550, y:400}, {x:750, y:400}, {x:450, y:500}, {x:400, y:600}, {x:350, y:500}, {x:250, y:300}, {x:100, y:300}, {x:300, y:320}, {x:320, y:320}, {x:320, y:350}, {x:400, y:320}, {x:340, y:150}, {x:550, y:270}, {x:570, y:300}, {x:600, y:200}, {x:550, y:700}];
var app;
var playerCanvas;
var locNum;
window.onload = function() {
    var energy;
    var intelligence;
    var happiness;
    var playerLoc;
    app = createBkgroundCanvas(document.getElementById("canvas1"));
    app.drawBackground();
    playerCanvas = createPlayerCanvas(document.getElementById("canvas2"));
    playerCanvas.drawPlayer();

    $("#rollDice").click(rollDice);

};
//roll dice. Every time move forward, roll dice
function rollDice(){
    
}
function updatePlayer() {
    playerCanvas.clear();
    playerCanvas.drawPlayer(buildingLoc[locNum].x, buildingLoc[locNum].y);
    locNum = locNum + 1;
}

function getDice(){

}

function resetDice(){

}
