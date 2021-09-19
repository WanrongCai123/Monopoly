// //buildingEvents
// //var turn = 0;

// function LovettEvents() {
//     popup("<p>Is the Leaing Tower of Pisa stable?</p>", "Yes/No", function(){
//         correct();
//         updateIntelligence(1);
//         updateHappiness(1);
//     },function(){
//         wrong();
//     })
// }

// function FondrenLibraryEvents(){
//    // updateIntelligence(1);
//     popup("<p>After a day studying in the library, your intelligence has increased.(+1)</p>","ok");
// }

// function HermannParkEvents(){
//     popup("<p>Would you like to wear a mask?</p>","Yes/No", function(){
//             updateHappiness(1);
//             popup("<p>After a day hanging out in the Harmann Park, your Happiness has increased.(+1)</p>","ok");
//         }, function(){
//                 var covidExposed = Math.random();
//                 if(covidExposed > 0.3){
//                     updateHealthyLevel(-2);
//                     updateHappiness(1);
//                     popup("<p>After a day hanging out in the Harmann Park, your Happiness has increased.(+1) \n But because you didn't wear a mask, you have a higher possibility of contracting COVID-19 and your healthy level decreased.(-2)</p>","ok");
//                 }else{
//                     getCovid();
//                     popup("<p>Unfortunately, you have infected COVID-19 since you didn't wear a mask. \n Therefore, you need go to TMC to recovery for 2 rounds.(-5)</p>","ok");
//                 }
//     });
// }              

// function SouthServeyEvents(){
//     updateHealthyLevel(1);
//     updateHappiness(1);
//     popup("<p>Since you enjoyed a good meal in south survey, your heathlthy level and happiness has increase.(+1)(+1)</p>","ok");
// }

// function BRCEvents(){
// 	popup("<p>Does mRNA vaccine contains live virus?</p>","Yes/No", function(){correct(); updateIntelligence(1);updateHappiness(1);}, function(){wrong();});
// }

// function RiceStadium(){
// 	popup("<p>What's the name of the speech delivered by President Kennedy at Rice Stadium?</p>","I have a dream / We choose to go to the Moon", function(){correct(); updateIntelligence(1);updateHappiness(1);}, function(){wrong();});

// }

// function BrownHallEvent(){

// }



// function TudorFieldhouseEvents(){
//     popup("<p>Would you like to get vaccined for COVID-19?</p>","Yes/No", function(){
//         if(checkVaccinedStatus == false){
//             updateHealth(5);
//             popup("<p>After being vaccined for COVID-19, your healthy level has strongly increased.(+5)</p>","ok");
//         }else{
//             popup("<p>Since you have already been fully vaccined, you can't be double vaccined.</p>","ok");
//         }   
//     }, function(){
//             popup("<p>Since you have refused to get vaccined, your healthy level did not changed.</p>","ok");
//     });
// }

// function RiceVillageEvents(){
//     popup("<p>What would you like to eat?</p>","newstring", function(){
//         updateHappiness(-1);
//         updateHealthyLevel(1);
//         popup("<p>Because of the healthy meal, your healthy level has increased and your happiness has decreased.(+1)(-1)</p>","ok");
//     }, function(){
//             updateHappiness(1);
//             updateHealthyLevel(-1);
//             popup("<p>Because of the unhealthy meal, your healthy level has decreased and your happiness has increased.(-1)(+1)</p>","ok");
//     }, "Sweet Green", "Shake Shack");
// }

// function WellnessCenterEvents(){
// 	updateHealthyLevel(2);
// 	updateHappiness(1);
// 	popup("<p>You Worked out!(Happiness +1)(Healthy Level+1)</p>","ok")
// }

// function RMC(){
// 	popup("<p>You are invited to HackRice! (Intelligence + 2) </p>","ok")
// 	updateIntelligence(2);
// 	popup("<p>too much work! (healthy - 1) </p>","ok")
// 	updateHealthyLevel(-1)
// 	if (intelligence > 12){
// 		updateIntelligence(2)
// 		updateHappiness(2)
// 		popup("<p>You Win a prize!(Happiness + 2)(intelligence + 2)</p>","ok")
// 	}
// }

// function McnairHallEvents(){
//     if(checkCovid() == false){
//         updateHappiness(1);
//         popup("<p>Conguatulations! You are healthy right now!</p>","ok");
//     }else{
//         getCovid();
//     }
// }

// function ValhallaEvents(){
//     popup("<p>You have drunk some beers at Valhalla and your happiness has increased.(+2) Do you want to continue?</p>", "Yes/No", function(){
//         popup("<p>What kind of drink do you want?</p>", "newstring", function(){
//             updateHappiness(-2);
//             updateHealthyLevel(-2);
//             popup("<p>Getting drunk doesn't make you feel good. Your happiness and healthy level has decreased.(-2)(-2)</p>","ok");
//         },function(){
//             updateHappiness(-1);
//             updateHealthyLevel(-1);
//             popup("<p>Getting drunk doesn't make you feel good. Your happiness and healthy level has decreased.(-1)(-1)</p>","ok");
//         }, "beer", "wine")
//     },function(){
//         popup("<p>Good night.</p>","ok");
//     })
// }

// function DuncanHallEvents(){
//     popup("<p>The ceiling was projected, using an overhead projector, onto the vault and then colored in by students.</p>", "Yes/No", function(){
//         correct();
//         updateIntelligence(1);
//         updateHappiness(1);
//     },function(){
//         wrong();
//     })
// }

// function checkCovid(){
//     var covidtest = Math.random();
//     if(covidtest > 0.002){
//         return false;
//     }else{
//         return true;
//     }
// }

// function checkVaccinedStatus(){
//     if(playerCanvas.vaccined < 2){
//         return false;
//     }else{
//         return true;
//     }
// }

// function getCovid(){
//     updateHealthyLevel(-5);
//     popup("<p>Unfortunately, you have gotten COVID-19.You need to go to TMC for treatment.</p>","ok");
//     // need go to TMC for treatment
// }

// function updateIntelligence(update){
//     //var p = playerCanvas[turn];
//     //p.intellgence = p.intellgence + update;

//     intelligence = intelligence + update;
// }

// function updateHappiness(update){
//     // var p = player[turn];
//     // p.happiness = p.happiness + update;
//     happyiness = happyiness + update;
// }

// function updateHealthyLevel(update){
//     // var p = player[turn];
//     // p.healthyLevel = p.healthyLevel + update;
//     healthyLevel = healthyLevel + update;
// }

// function updateVaccined(update){
//     // var p = player[turn];
//     // p.healthyLevel = p.healthyLevel + update;
//     vaccined = vaccined + update;
// }

// function correct(){
// 	popup("<p>Conguatulations! You are correct! Your intelligence and happiness has increased.(+1)(+1)</p>","ok");
// }

// function wrong(){
// 	popup("<p>Sorry, wrong answer:(</p>","ok");
// }

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