/*
Name:        John
Course:      CIS 115
Assignment:  Project 4
Description: Canvas

*/


"use strict"

var warriorSheet = new Image();
warriorSheet.src = "GameWarriorSheet.png"
var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");

var portalSheet = new Image();
portalSheet.src = "portal.png"

var timer;

var video = document.getElementById("video");

//Position set for Sprite character
var xPos = 100;
var yPos = 100;


//Position set for boundary sprite
var portalX = 200;
var portalY = 100;

var clear = function(){
	context.clearRect(xPos, yPos, 28, 45);
}

var clearCanvas = function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}

var stillWarrior = function(){
	// (img, sx, sy, sw, sh, dx, dy, dw, dh)
	context.drawImage(warriorSheet, 188, 2.5, 28, 45, xPos, yPos, 28, 45);

}

var rightWarrior = function(){
	// (img, sx, sy, sw, sh, dx, dy, dw, dh)
	context.drawImage(warriorSheet, 158, 2.5, 28, 45, xPos, yPos, 28, 45);
}

var leftWarrior = function(){
	// (img, sx, sy, sw, sh, dx, dy, dw, dh)
	context.drawImage(warriorSheet, 220, 2.5, 28, 45, xPos, yPos, 28, 45);
}

var portal = function(){
	context.drawImage(portalSheet, 0, 0, 147, 153, portalX, portalY, 28, 45);
}

function move(e){
	if(e.keyCode==39){
		clear(); //clears previous sprite
		xPos += 5;
		portal();
		rightWarrior(); 
		playVideo();


	}

	if(e.keyCode==37){
		clear();
		xPos -= 5;
		portal();
		leftWarrior();
		playVideo();

	}
}

var playVideo = function(){
	if(xPos == portalX){
		timer = window.setInterval(function(){
		context.drawImage(video, 0, 0, canvas.width, canvas.height);
			}, 30);

		var stopVideo = window.setInterval(function(){clearInterval(timer)}, 2000);
		clearCanvas();
		video.play();
	}


}


var hideVideoElement = function(){
	var x = document.getElementById("myvid");
	if(x.style.display === "none"){
		x.style.display = "block";
	}
	else{
		x.style.display = "none";
	}
}






window.onload = function(){
	hideVideoElement();

	stillWarrior();
	portal();
	window.onkeydown = move;
	window.onkeyup = stillWarrior;

	playVideo();





}


