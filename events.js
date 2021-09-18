//buildingEvents
//var turn = 0;

function LovettEvents() {}

function FondrenLibraryEvents(){
    updateIntelligence(1);
}

function HermannParkEvents(){
    popup("<p>Would you like to  wear a mask?</p>", function() {
        var covidPossibility = 0.5;

    }, "Yes/No", "No");
}

function updateIntelligence(update){
    //var p = playerCanvas[turn];
    //p.intellgence = p.intellgence + update;

    playerCanvas.intellgence = playerCanvas.intellgence + update;
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

function popup(HTML, option, actiona, actionb, choose) {
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

        if(choose === "Yes"){
            $("#popupyes").on("click", actiona);
        }else{
            $("#popupno").on("click", actionb);
        }
		

	// Ok
	} else if (option !== "blank") {
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