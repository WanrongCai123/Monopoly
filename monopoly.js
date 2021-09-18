//initialize game and set variable
function createBkgroundCanvas(canvas, buld) {
    let c = canvas.getContext("2d");
    //building location

    let clear = function() {
        c.clearRect(0,0, canvas.width, canvas.height);
    };

    return {
        clear: clear
    }
}

function createPlayerCanvas(canvas) {
    
    let c = canvas.getContext("2d");
    console.log("1");
    let drawPlayer = function() {
        var img = new Image();
        img.onload = function() {
            c.drawImage(img, 100, 100);
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

window.onload = function() {
    var energy;
    var intelligence;
    var happiness;
    var playerLoc;
    var buildingLoc = [{x:600, y:300}, {x:550, y:400}, {x:750, y:400}, {x:450, y:500}, {x:400, y:600}, {x:350, y:500}, {x:250, y:300}, {x:100, y:300}, {x:300, y:320}, {x:320, y:320}, {x:320, y:350}, {x:400, y:320}, {x:340, y:150}, {x:550, y:270}, {x:570, y:300}, {x:600, y:200}, {x:550, y:700}];
    app = createBkgroundCanvas(document.getElementById("canvas1"), buld);
    playerCanvas = createPlayerCanvas(document.getElementById("canvas2"));
    console.log("2");
    playerCanvas.drawPlayer();

    // $("#btn-rollDice").click(rollDice);

};
//roll dice. Every time move forward, roll dice
function rollDice(){

}

function getDice(){

}

function resetDice(){

}
