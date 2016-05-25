
// Script to Activate the Carousel
$('.carousel').carousel({
        interval: 5000 //changes the speed
})

var userpoints = 10;

//Script to increment the score
var score1 = 4024;
var score2 = 3933;
var score3 = 3812;
var score4 = 3203;
var score5 = 3148;

function incrementScore1()
{
	if (userpoints == 0) {
		alert("You've reached your maximum vote.")
	}
	else{
		score1++;
		document.getElementById("score1").innerHTML = score1;
		userpoints--;
		document.getElementById("userpoints").innerHTML = userpoints;
	}
}

function incrementScore2()
{
	if (userpoints == 0) {
		alert("You've reached your maximum vote.")
	}
	else{
		score2++;
		document.getElementById("score2").innerHTML = score2;
		userpoints--;
		document.getElementById("userpoints").innerHTML = userpoints;
	}
}

function incrementScore3()
{
	if (userpoints == 0) {
		alert("You've reached your maximum vote.")
	}
	else{
		score3++;
		document.getElementById("score3").innerHTML = score3;
		userpoints--;
		document.getElementById("userpoints").innerHTML = userpoints;
	}
}

function incrementScore4()
{
	if (userpoints == 0) {
		alert("You've reached your maximum vote.")
	}
	else{
		score4++;
		document.getElementById("score4").innerHTML = score4;
		userpoints--;
		document.getElementById("userpoints").innerHTML = userpoints;
	}
}

function incrementScore5()
{
	if (userpoints == 0) {
		alert("You've reached your maximum vote.")
	}
	else{
		score5++;
		document.getElementById("score5").innerHTML = score5;
		userpoints--;
		document.getElementById("userpoints").innerHTML = userpoints;
	}
}
