//initialize game and set variable
function createApp(canvas) {
    let c = canvas.getContext("2d");
    var energy;
    var intelligence;
    var happiness;
    var location;
    var image;
    //building location
    var buld = [{x:0, y:0}]

    var player = function(){
        energy = 10;
        intelligence = 2;
        happiness = 10;
        location = [{x:0, y:0}];
        image = document.getElementById();
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
        drawLine: drawLine,
        clear: clear
    }
}

window.onload = function() {
    app = createApp(document.querySelector("canvas"));

    $("#btn-line").click(createLine);
    $("#btn-move").click(setUpdateFreq);
    $("#btn-reset").click(reset);
};
//roll dice. Every time move forward, roll dice
function rollDice(){

}

function getDice(){

}

function resetDice(){

}
