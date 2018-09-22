
	var sweetHeart = ""

	var Jacob = 0,
	Jeanne = 0,
	Leo = 0,
	Jack = 0,
	Roman = 0,
	Aiden = 0,
	Kevin = 0,
	Clay = 0,
	Cam = 0,
	Charles = 0;

function check(){

	var name = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;

	if (question2 == "Stein") {
		Leo += 2;
		Aiden += 5;
		Kevin += 4;
	}
	if(question2 == "Trump_ironic"){
		Jacob += 2;
		Jack += 1;
	}

	if (question2 == "Trump_unironic") {
		Cam++;
	}
	if(question2 == "No one"){
		Jeanne += 5;
		Clay += 4;
		Charles += 2;
		Roman += 3;
	}

	if(question3 == "Mac Demarco"){
		Jacob += 6;
		Roman += 1;
	}
	if(question3 == "The Beatles"){
		Jack += 4;
		Roman += 2;
		Aiden += 1;
	}
	if(question3 == "Pixies"){
		Jeanne += 3;
		Aiden += 5;
		Clay += 1;
	}
	if(question3 == "Pink Floyd"){
		Jack += 3;
		Leo += 2;
	}

	if(question4 == "Yes"){
		Jeanne += 3;
		Clay += 2;
		Roman += 1;
		Cam += 6;
		Charles += 2;
	}
	if(question4 == "No"){
		Aiden += 4;
		Kevin += 2;
		Leo += 1;
		Jacob += 5;
	}
	if(question4 == "Sometimes"){
		Jack += 4;
		Aiden += 2;
		Jeanne += 2;
		Clay += 1;
	}
	if(question4 == "Silly hat"){
		Leo += 8;
	}

	if(question5 == "Yes"){
		Leo += 4;
		Kevin += 5;
		Aiden += 8;
		Cam += 2;
		Jack += 1;
		Clay += 3;
	}
	if(question5 == "No"){
		Charles += 8;
		Jacob += 6;
	}
	if(question5 == "Barely"){
		Jack += 3;
		Jeanne += 6;
		Roman += 4;
	}

	if(question6 == "China"){
		Aiden += 6;
		Leo += 4;
		Jack ++;
	}
	if(question6 == "Franch"){
		Jacob += 7;
		Jack += 5;
		Jeanne += 2;
		Kevin ++;
		Clay += 3;
	}if(question6 == "Hell"){
		Jacob += 5;
		Leo += 3;
		Cam += 4;
		Roman += 5;
		Clay += 2;
	}if(question6 == "Brazil"){
		Charles += 10;
	}

	if(question7 == "Impressionism"){
		Jack += 6;
		Aiden += 2;
		Kevin += 3;
		Jacob += 5;
		Jeanne ++;
	}
	if(question7 == "Neo-Expressionism"){
		Jeanne += 9;
		Leo += 7;
		Roman += 5;
		Clay += 8;
		Charles += 3;
	}
	if(question7 == "Romanticism"){
		Cam += 3;
		Jack += 6;
		Aiden += 4;
	}
	if(question7 == "Surrealism"){
		Jeanne += 4;
		Jack += 2;
		Clay += 3;
		Leo += 5;
	}

	if(question8 == "Morning Person"){
		Jeanne += 6;
		Cam += 4;
	}
	if(question8 == "Night Owl"){
		Leo += 3;
		Charles += 5;
		Clay += 4;
		Roman += 3;
	}
	if(question8 == "Both"){
		Jack += 5;
		Jacob += 4;
		Aiden += 7;
		Kevin += 3;
	}
	if(question8 == "Neither"){
		Kevin += 6;
		Aiden += 4;
		Jacob += 3;
		Jack += 3;
	}

	if(question9 == "Before the quotation mark"){
		Jack += 9;
		Aiden += 7;
		Cam += 6;
	}
	if(question9 == "After the quotation mark"){
		Kevin += 5;
		Jeanne += 4;
		Leo += 5;
		Charles += 6;
		Clay += 7;
	}
	if(question9 == "Grammar is fascist"){
		Jacob += 9;
		Roman += 7;
		Clay += 6;

	}
	if(question9 == "Grammar is a spook"){
		Roman += 7;
		Jacob += 5;
		Clay += 6;
	}

	if(question10 == "Black"){
		Clay += 7;
		Roman += 5;
	}
	if(question10 == "White"){
		Cam += 10;
		Charles += 9;
		Aiden += 7;
		Jeanne += 6;
	}
	if(question10 == "Indian"){
		Jack += 7;
		Kevin += 5;
		Roman += 8;

	}
	if(question10 == "Asian"){
		Aiden += 6;
		Leo += 8;
		Jack += 7;
		Kevin += 7;
	}
	var results = [Jack, Jeanne, Aiden, Kevin, Charles, Cam, Roman, Clay, Jacob, Leo];
	console.log(results);
	results.sort(function(a, b){return a - b});
	results.reverse();

	while (true){
		if(results[0] == Jack){
			sweetHeart += "Jack ";
			break;
		}
		if(results[0] == Jeanne){
			sweetHeart += "Jeanne ";
			break;
		}
		if(results[0] == Aiden){
			sweetHeart += "Aiden ";
			break;
		}
		if(results[0] == Kevin){
			sweetHeart += "Kevin ";
			break;
		}
		if(results[0] == Charles){
			sweetHeart += "Charles ";
			break;
		}
		if(results[0] == Cam){
			sweetHeart += "Cam ";
			break;
		}
		if(results[0] == Roman){
			sweetHeart += "Roman ";
			break;
		}
		if(results[0] == Clay){
			sweetHeart += "Clay ";
			break;
		}
		if(results[0] == Jacob){
			sweetHeart += "Jacob ";
			break;
		}
		if(results[0] == Leo){
			sweetHeart += "Leo ";
			break;
		}
		break;
	}

	var pictures = ["img/jordanPeterson.jpg", "img/MA4v54RBbhK__gqHoR-6f7_LqpNkucPal_r8dQHYIR0.jpg",
	"img/karl-marx-never....jpg", "img/krav maga.png"];

	var messages = ["Great job!", "That's just okay", "You really need to do better"];

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("number_correct").innerHTML =  name + ", you have completed the test. Your perfect match is: " + sweetHeart;
	// document.getElementById("picture").src = pictures[results];
	}
