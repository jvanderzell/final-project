$(document).ready(function() {
	console.log("ready!");

//try to use jquery
var singA = document.getElementById("aplay");

$(".anote").click(function() {
		singA.currentTime = 0;
		singA.play();
});

var singB = document.getElementById("bplay");


$(".bnote").click(function() {
	singB.currentTime = 0;
	singB.play();
});

var singC = document.getElementById("cplay");

$(".cnote").click(function() {
		singC.currentTime = 0;
		singC.play();
});

var singD = document.getElementById("dplay");

$(".dnote").click(function() {
		singD.currentTime = 0;
		singD.play();
});

var singE = document.getElementById("eplay");

$(".enote").click(function() {
		singE.currentTime = 0;
		singE.play();
});

var singF = document.getElementById("fplay");

$(".fnote").click(function() {
		singF.currentTime = 0;
		singF.play();
});

var singG = document.getElementById("gplay");

$(".gnote").click(function() {
		singG.currentTime = 0;
		singG.play();
});

var singHighC = document.getElementById("highcplay");

$(".highc").click(function() {
		singHighC.currentTime = 0;
		singHighC.play();
});


});
