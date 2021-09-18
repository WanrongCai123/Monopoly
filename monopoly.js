//initialize game and set variable
function createBkgroundCanvas(canvas) {
    let c = canvas.getContext("2d");
    let drawBackground = function(){
        var img = new Image(c.width, c.width);
        img.onload = function() {
            c.drawImage(img, 0, 0, canvas.width, canvas.height);
            var buildingLength=buildingLoc.length;
            for (let i = 0; i < buildingLength; i++) {
                var nextLoc = (i + 1) % buildingLength;
                drawLine(buildingLoc[i].x + 30, buildingLoc[i].y + 30, buildingLoc[nextLoc].x + 30, buildingLoc[nextLoc].y + 30);
            }
        };
        img.src = 'images/BuildingLocation.jpg';
    }
    let drawLine = function(startX, startY, endX, endY) {
        c.beginPath();
        c.moveTo(startX, startY);
        c.lineTo(endX, endY);
        c.stroke();

    };

    let clear = function() {
        c.clearRect(0,0, canvas.width, canvas.height);
    };

    return {
        drawLine:drawLine,
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
var buildingLoc = [{x: 958, y:170}, 
                    {x:1120, y:370},
                    {x:725, y:620},
                    {x:5, y:380}, 
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
    var healthyLevel;
    var intelligence;
    var happiness;
    var playerLoc;
    var vaccined;

    app = createBkgroundCanvas(document.getElementById("canvas1"));
    //set canvas1 to window size
    app.drawBackground();
        

    playerCanvas = createPlayerCanvas(document.getElementById("canvas2"));
    //set canvas2 to window size
    playerCanvas.drawPlayer(buildingLoc[locNum].x, buildingLoc[locNum].y);
    $("#rollDice").click(rollDice);

};
//roll dice. Every time move forward, roll dice
function rollDice(){
    var randomNum = Math.floor(Math.random() * 2 + 1);
    console.log(randomNum);
    if (randomNum == 1) {
        updatePlayerOnce();

        document.getElementById("img1").style.visibility ="visible";
        document.getElementById("img2").style.visibility ="hidden";
    }
    else{
        updatePlayerTwice();
        document.getElementById("img1").style.visibility ="hidden";
        document.getElementById("img2").style.visibility ="visible";
    }
    
}
function updatePlayerOnce() {
    playerCanvas.clear();
    locNum = locNum + 1;
    locNum = locNum % buildingLoc.length;
    playerCanvas.drawPlayer(buildingLoc[locNum].x, buildingLoc[locNum].y);
    
}
function updatePlayerTwice() {
    playerCanvas.clear();
    locNum = locNum + 2;
    locNum = locNum % buildingLoc.length;
    playerCanvas.drawPlayer(buildingLoc[locNum].x, buildingLoc[locNum].y);
    
}


function resetDice(){

}
