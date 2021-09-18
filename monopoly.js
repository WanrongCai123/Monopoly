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


//events function
function LovettEvents() {}

function FondrenLibraryEvents(){
    updateIntelligence(1);
    popup("<p>After a day studying in the library, your intelligence has increased.(+1)</p>","ok")
}

function HermannParkEvents(){
    popup("<p>Would you like to wear a mask?</p>","Yes/No", function(){
        updateHappiness(1);
        popup("<p>After a day hanging out in the Harmann Park, your Happiness has increased.(+1)</p>","ok")
    }, function(){
        var covidExposed = Math.random();
        if(covidExposed > 0.3){
            updateHealthyLevel(-2);
            updateHappiness(1);
            popup("<p>After a day hanging out in the Harmann Park, your Happiness has increased.(+1) \n But because you didn't wear a mask, you have a higher possibility of contracting COVID-19 and your healthy level decreased.(-2)</p>","ok")
        }else{
            getCovid();
            popup("<p>Unfortunately, you have infected COVID-19 since you didn't wear a mask. \n Therefore, you need go to TMC to recovery for 2 rounds.(-5)</p>","ok")
        }
    });
}

function SouthServeyEvents(){
    updateHealthyLevel(1);
    updateHappiness(1);
    popup("<p>Since you enjoyed a good meal in south survey, your heathlthy level and happiness has increase.(+1)(+1)</p>","ok")
}

function BRCEvents(){
    popup("<p>Does mRNA vaccine contains live virus?</p>","Yes/No", function(){correct(); updateIntelligence(1);updateHappiness(1);}, function(){wrong();});
}

function RiceStadium(){
    popup("<p>What's the name of the speech delivered by President Kennedy at Rice Stadium?</p>","I have a dream / We choose to go to the Moon", function(){correct(); updateIntelligence(1);updateHappiness(1);}, function(){wrong();});

}

function TudorFieldhouseEvents(){
    popup("<p>Would you like to get vaccined for COVID-19?</p>","Yes/No", function(){
        if(checkVaccinedStatus == false){
            updateHealth(5);
            popup("<p>After being vaccined for COVID-19, your healthy level has strongly increased.(+5)</p>","ok");
        }else{
            popup("<p>Since you have already been fully vaccined, you can't be double vaccined.</p>")
        }
    }, function(){
        popup("<p>Since you have refused to get vaccined, your healthy level did not changed.</p>","ok")
    });
}

function checkVaccinedStatus(){
    if(playerCanvas.vaccined < 2){
        return false;
    }else{
        return true;
    }
}

function getCovid(){
    updateHealthyLevel(-5);
    // need go to TMC for treatment
}

function updateIntelligence(update){
    //var p = playerCanvas[turn];
    //p.intellgence = p.intellgence + update;

    playerCanvas.intelligence = playerCanvas.intellgence + update;
    console.log(playerCanvas.intelligence);
}

function updateHappiness(update){
    // var p = player[turn];
    // p.happiness = p.happiness + update;
    playerCanvas.happyiness = playerCanvas.happyiness + update;
}

function updateHealthyLevel(update){
    // var p = player[turn];
    // p.healthyLevel = p.healthyLevel + update;
    playerCanvas.healthyLevel = playerCanvas.healthyLevel + update;
}

function correct(){
    document.getElementById("popuptext").innerHTML = "You are Correct!"
}

function wrong(){
    document.getElementById("popuptext").innerHTML = "Wrong Answer:("
}

function popup(HTML, option, actiona, actionb) {
    document.getElementById("popuptext").innerHTML = HTML;
    document.getElementById("popup").style.width = "300px";
    document.getElementById("popup").style.top = "0px";
    document.getElementById("popup").style.left = "0px";

    option = option ? option.toLowerCase() : "";

    if (typeof actiona !== "function") {
        actiona = null;
    }

    if (typeof actionb !== "function") {
        actionb = null;
    }

    // Yes/No
    if (option === "yes/no") {
        document.getElementById("popuptext").innerHTML += "<div><input type=\"button\" value=\"Yes\" id=\"popupyes\" /><input type=\"button\" value=\"No\" id=\"popupno\" /></div>";

        $("#popupyes, #popupno").on("click", function() {
            $("#popupwrap").hide();
            $("#popupbackground").fadeOut(400);
        });

        $("#popupyes").on("click", actiona);
        $("#popupno").on("click", actionb);


        // Ok
    } else if (option === "ok") {
        $("#popuptext").append("<div><input type='button' value='OK' id='popupclose' /></div>");
        $("#popupclose").focus();

        $("#popupclose").on("click", function() {
            $("#popupwrap").hide();
            $("#popupbackground").fadeOut(400);
        }).on("click", actiona);

    }

    // Show using animation.
    $("#popupbackground").fadeIn(400, function() {
        $("#popupwrap").show();
    });

}
//canvas setup
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
    var healthyLevel = 10;
    var intelligence =10;
    var happiness=10;
    var playerLoc = 0;
    var vaccined =2;
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
        healthyLevel: healthyLevel,
        intelligence: intelligence,
        happiness: happiness,
        playerLoc: playerLoc,
        vaccined: vaccined,
        drawPlayer: drawPlayer,
        clear: clear
    }
}


window.onload = function() {

    app = createBkgroundCanvas(document.getElementById("canvas1"));
    //set canvas1 to window size
    app.drawBackground();
        

    playerCanvas = createPlayerCanvas(document.getElementById("canvas2"));
    //set canvas2 to window size
    playerCanvas.drawPlayer(buildingLoc[locNum].x, buildingLoc[locNum].y);
    $("#rollDice").click(rollDice);
    $("#rollDice").click(FondrenLibraryEvents);

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
