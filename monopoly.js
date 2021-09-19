var canvasWidth = document.getElementById("canvas1").width;
var canvasHeight = document.getElementById("canvas1").height;
var buildingLoc = [{x: 958, y:170},
    {x:1120, y:370},
    {x:725, y:620},
    {x:600, y:400},
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

var healthyLevel = 10;
var intelligence =10;
var happiness=10;
var playerLoc = 0;
var vaccined =2;
var intervalId;
var playerLocX;
var playerLocY;

//events function
function LovettEvents() {
    popup("<p>Is the Leaing Tower of Pisa stable?</p>", "Yes/No", function(){
        correct();
        updateIntelligence(1);
        updateHappiness(1);
        showPlayerFeature();
    },function(){
        wrong();
        showPlayerFeature();
    })
}

function FondrenLibraryEvents(){
    updateIntelligence(1);
    showPlayerFeature();
    popup("<p>After a day studying in the library, your intelligence has increased.(+1)</p>","ok")
}

function HermannParkEvents(){
    popup("<p>Would you like to wear a mask?</p>","Yes/No", function(){
        updateHappiness(1);
        showPlayerFeature();
        popup("<p>After a day hanging out in the Harmann Park, your Happiness has increased.(+1)</p>","ok")
    }, function(){
        var covidExposed = Math.random();
        if(covidExposed > 0.3){
            updateHealthyLevel(-2);
            updateHappiness(1);
            showPlayerFeature();
            popup("<p>After a day hanging out in the Harmann Park, your Happiness has increased.(+1) \n But because you didn't wear a mask, you have a higher possibility of contracting COVID-19 and your healthy level decreased.(-2)</p>","ok")
        }else{
            getCovid();
            updateHappiness(1);
            showPlayerFeature();
            popup("<p>Unfortunately, you have infected COVID-19 since you didn't wear a mask. \n Therefore, you need go to TMC to recovery for 2 rounds.(-5)</p>","ok")
        }
    });
}

function BRCEvents(){
    popup("<p>Does mRNA vaccine contains live virus?</p>","Yes/No", function(){correct(); updateIntelligence(1);updateHappiness(1);showPlayerFeature();}, function(){wrong();showPlayerFeature();});
}

function RiceStadium(){
    popup("<p>What's the name of the speech delivered by President Kennedy at Rice Stadium?</p>","newstring", function(){correct(); updateIntelligence(1);updateHappiness(1);showPlayerFeature();}, function(){wrong();showPlayerFeature();}, "I have a dream", "We choose to go to the Moon");

}

function BrownHallEvent(){

}

function TudorFieldhouseEvents(){
    popup("<p>Would you like to get vaccined for COVID-19?</p>","Yes/No", function(){
        if(checkVaccinedStatus == false){
            updateVaccined(1);
            updateHealth(5);
            showPlayerFeature();
            popup("<p>After being vaccined for COVID-19, your healthy level has strongly increased.(+5)</p>","ok");
        }else{
            popup("<p>Since you have already been fully vaccined, you can't be double vaccined.</p>")
        }
    }, function(){
        showPlayerFeature();
        popup("<p>Since you have refused to get vaccined, your healthy level did not changed.</p>","ok")
    });
}

function RiceVillageEvents(){
    popup("<p>What would you like to eat?</p>","newstring", function(){
        updateHappiness(-1);
        updateHealthyLevel(1);
        showPlayerFeature();
        popup("<p>Because of the healthy meal, your healthy level has increased and your happiness has decreased.(+1)(-1)</p>","ok");
    }, function(){
            updateHappiness(1);
            updateHealthyLevel(-1);
            showPlayerFeature();
            popup("<p>Because of the unhealthy meal, your healthy level has decreased and your happiness has increased.(-1)(+1)</p>","ok");
    }, "Sweet Green", "Shake Shack");
}

function WellnessCenterEvents(){
	updateHealthyLevel(2);
	updateHappiness(1);
    showPlayerFeature();
	popup("<p>You Worked out!(Happiness +1)(Healthy Level+1)</p>","ok")
}

function RMCEvents(){
	popup("<p>You are invited to HackRice! (Intelligence + 2) </p>","ok")
	updateIntelligence(2);
    showPlayerFeature();
	popup("<p>too much work! (healthy - 1) </p>","ok")
	updateHealthyLevel(-1)
    showPlayerFeature();
	if (intelligence > 12){
		updateIntelligence(2)
		updateHappiness(2)
        showPlayerFeature();
		popup("<p>You Win a prize!(Happiness + 2)(intelligence + 2)</p>","ok")
	}
}

function McnairHallEvents(){
    if(checkCovid() == false){
        updateHappiness(1);
        showPlayerFeature();
        popup("<p>Conguatulations! You are healthy right now!</p>","ok");
    }else{
        getCovid();
    }
}

function ValhallaEvents(){
    popup("<p>You have drunk some beers at Valhalla and your happiness has increased.(+2) Do you want to continue?</p>", "Yes/No", function(){
        popup("<p>What kind of drink do you want?</p>", "newstring", function(){
            updateHappiness(-2);
            updateHealthyLevel(-2);
            showPlayerFeature();
            popup("<p>Getting drunk doesn't make you feel good. Your happiness and healthy level has decreased.(-2)(-2)</p>","ok");
        },function(){
            updateHappiness(-1);
            updateHealthyLevel(-1);
            showPlayerFeature();
            popup("<p>Getting drunk doesn't make you feel good. Your happiness and healthy level has decreased.(-1)(-1)</p>","ok");
        }, "beer", "wine")
    },function(){
        updateHappiness(1);
        showPlayerFeature();
        popup("<p>Good night.</p>","ok");
    })
}

function DuncanHallEvents(){
    popup("<p>The ceiling was projected, using an overhead projector, onto the vault and then colored in by students.</p>", "Yes/No", function(){
        correct();
        updateIntelligence(1);
        updateHappiness(1);
    },function(){
        wrong();
    })
}

function checkCovid(){
    var covidtest = Math.random();
    if(covidtest > 0.002){
        return false;
    }else{
        return true;
    }
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
    intelligence = intelligence + update;
    console.log(intelligence);
}

function updateHappiness(update){
    happiness = happiness + update;
}

function updateHealthyLevel(update){
    healthyLevel = healthyLevel + update;
}

function updateVaccined(update){
    vaccined = vaccined + update;
}

function correct(){
    showPlayerFeature();
	popup("<p>Conguatulations! You are correct! Your intelligence and happiness has increased.(+1)(+1)</p>","ok");
}

function wrong(){
    showPlayerFeature();
	popup("<p>Sorry, wrong answer:(</p>","ok");
}

function popup(HTML, option, actiona, actionb, stringa, stringb) {
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

    // input string
    } else if (option === "newstring") {
        document.getElementById("popuptext").innerHTML += "<div><input type=\"button\" value=\"" + stringa + "\" id=\"popupstringa\" /><input type=\"button\" value=\"" + stringb + "\" id=\"popupstringb\" /></div>";

        $("#popupstringa, #popupstringb").on("click", function() {
            $("#popupwrap").hide();
            $("#popupbackground").fadeOut(400);
        });

        $("#popupstringa").on("click", actiona);
        $("#popupstringb").on("click", actionb);
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
        img.src = 'images/BuildingLocation.PNG';
    }
    let drawLine = function(startX, startY, endX, endY) {
        c.setLineDash([5,15]); 
        c.lineWidth = 4; 
        c.strokeStyle = 'blue'; 

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
        img.src = 'images/owl-logo.png';
    };


    let clear = function() {
        c.clearRect(0,0, canvas.width, canvas.height);
    };


    return {
        drawPlayer: drawPlayer,
        clear: clear
    }
}

function showPlayerFeature(){
    var intell = document.getElementById("intelligence");
    var happy = document.getElementById("happiness");
    var ener = document.getElementById("energy");
    intell.innerHTML = "Intelligence: " + intelligence;
    happy.innerHTML = "Happiness: "+ happiness;
    ener.innerHTML = "Energy: "+ healthyLevel;
    if(intelligence >= 20){
        alert("You learned a lot!");
        window.location.reload();
    }
    if(healthyLevel < 0){
        window.location.reload();
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


};
//roll dice. Every time move forward, roll dice
function rollDice(){
    var randomNum = Math.floor(Math.random() * 2 + 1);
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


function updatePlayerTwice() {
    playerCanvas.clear();
    locNum = locNum + 2;
    locNum = locNum % buildingLoc.length;
    playerCanvas.drawPlayer(buildingLoc[locNum].x, buildingLoc[locNum].y);
    
}
function updatePlayerOnce() {
    playerCanvas.clear();
    locNum = locNum + 1;
    locNum = locNum % buildingLoc.length;
    playerCanvas.drawPlayer(buildingLoc[locNum].x, buildingLoc[locNum].y);
    gotoEachEvent(locNum);
}
function updatePlayerTwice() {
    playerCanvas.clear();
    locNum = locNum + 2;
    locNum = locNum % buildingLoc.length;
    playerCanvas.drawPlayer(buildingLoc[locNum].x, buildingLoc[locNum].y);
    gotoEachEvent(locNum);
}

function gotoEachEvent(locNum){
    switch(locNum){
        case 0: LovettEvents(); break;
        case 1: HermannParkEvents(); break;
        case 2: BRCEvents(); break;
        case 3: TudorFieldhouseEvents(); break;
        case 4: RiceVillageEvents(); break;
        case 5: RiceStadium(); break;
        case 6: BrownHallEvent(); break;
        case 7: WellnessCenterEvents(); break;
        case 8: McnairHallEvents(); break;
        case 9: RMCEvents(); break;
        case 10: FondrenLibraryEvents(); break;
        case 11: ValhallaEvents(); break;
        case 12: DuncanHallEvents(); break;
        default: break;
    }
}

function resetDice(){

}
