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
var buildingLoc = [{x: 0.7725*canvasWidth, y:0.4244*canvasWidth}, 
                    {x:0.6675*canvasWidth, y:0.4695*canvasHeight}, 
                    {x:0.935*canvasWidth, y:0.6483*canvasHeight}, 
                    {x:0.63*canvasWidth, y:0.6840*canvasHeight}, 
                    {x:0.5688*canvasWidth, y:canvasHeight}, 
                    {x:0.4975*canvasWidth, y:0.7073*canvasHeight}, 
                    {x:0.2563*canvasWidth, y:0.6267*canvasHeight}, 
                    {x:0.01875*canvasWidth, y:0.6925*canvasHeight}, 
                    {x:0.4475*canvasWidth, y:0.663*canvasHeight}, 
                    {x:0.525*canvasWidth, y:0.4742*canvasHeight}, 
                    {x:0.5163*canvasWidth, y:0.5258*canvasHeight}, 
                    {x:0.5525*canvasWidth, y:0.5079*canvasHeight}, 
                    {x:0.55*canvasWidth, y:0.3492*canvasHeight}, 
                    {x:0.6775*canvasWidth, y:0.369*canvasHeight}, 
                    {x:0.695*canvasWidth, y:0.4187*canvasHeight}, 
                    {x:0.7325*canvasWidth, y:0.4187*canvasHeight}, 
                    {x:0.6875*canvasWidth, y:canvasHeight} ];
var app;
var playerCanvas;
var locNum = 0;
window.onload = function() {
    var energy;
    var intelligence;
    var happiness;
    var playerLoc;
    app = createBkgroundCanvas(document.getElementById("canvas1"));
    app.drawBackground();
    playerCanvas = createPlayerCanvas(document.getElementById("canvas2"));
    playerCanvas.drawPlayer(100, 100);
    $("#rollDice").click(updatePlayer);

};
//roll dice. Every time move forward, roll dice
function rollDice(){
    
}
function updatePlayer() {
    playerCanvas.clear();
    playerCanvas.drawPlayer(buildingLoc[locNum].x, buildingLoc[locNum].y);
    locNum = locNum + 1;
    console.log(buildingLoc.length);
    locNum = locNum % buildingLoc.length;
}

function getDice(){

}

function resetDice(){

}
