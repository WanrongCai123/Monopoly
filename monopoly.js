//initialize game and set variable
function createApp(canvas) {
    let c = canvas.getContext("2d");
    var energy;
    var intelligence;
    var happiness;
    var location;
    var image;
    //building location
    var buld = [{x:600, y:300}, {x:550, y:400}, {x:750, y:400}, {x:450, y:500}, {x:400, y:600}, {x:350, y:500}, {x:250, y:300}, {x:100, y:300}, {x:300, y:320}, {x:320, y:320}, {x:320, y:350}, {x:400, y:320}, {x:340, y:150}, {x:550, y:270}, {x:570, y:300}, {x:600, y:200}, {x:550, y:700}];


    var player = function(){
        energy = 10;
        intelligence = 2;
        happiness = 10;
        location = [{x:0, y:0}];
        image = document.getElementById();
    }
    function drawPlayer() {
        var ctx = document.getElementById('canvas2').getContext('2d');
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 100);
        };
        img.src = 'images/MatchStickMan.png';
    }
}

function createPlayer(canvas) {
    let c = canvas.getContext("2d");
    let drawPlayer = function() {
        var img = new Image();
        img.onload = function() {
            c.drawImage(img, 0, 100);
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
    app = createApp(document.querySelector("canvas1"));
    player = createPlayer(document.querySelector("canvas2"));
    player.drawPlayer();
    console.log("1");

    $("#btn-rollDice").click(rollDice);

};
//roll dice. Every time move forward, roll dice
function rollDice(){

}

function getDice(){

}

function resetDice(){

}
