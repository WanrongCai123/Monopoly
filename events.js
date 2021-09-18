//buildingEvents
//var turn = 0;

function LovettEvents() {}

function FondrenLibraryEvents(){
   // updateIntelligence(1);
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

function RiceVillageEvents(){
    popup("<p>What would you like to eat?</p>","newstring", function(){
        updateHappiness(-1);
        updateHealthyLevel(1);
        popup("<p>Because of the healthy meal, your healthy level has increased and your happiness has decreased.(+1)(-1)</p>","ok");
    }, function(){
            updateHappiness(1);
            updateHealthyLevel(-1);
            popup("<p>Because of the unhealthy meal, your healthy level has decreased and your happiness has increased.(-1)(+1)</p>","ok");
    }, "Sweet Green", "Shake Shack");
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

    playerCanvas.intelligence = playerCanvas.intelligence + update;
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
