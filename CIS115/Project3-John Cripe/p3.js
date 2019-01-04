/*
Name:        John
Course:      CIS 115
Assignment:  Project 3
Description: Canvas

*/

"use strict"

// Populates the Selection Array
var populate = document.getElementById("colorselect");
var colors = ["Red", "Green", "Cyan", "Blue", "Black"];

for(var i = 0; i < colors.length; i++){
	var pop = colors[i];
	var x = document.createElement("option");
	x.textContent = pop;
	x.value = pop;
	populate.append(x);
}

// Set up the Canvas fill and clear

var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");


var drawtext = document.getElementById("drawtext");

var fill = function(){
	var selected = document.getElementById("colorselect");
	var svalue = selected.options[selected.selectedIndex].value;

	context.fillStyle = svalue;
	context.fillRect(0,0,canvas.width, canvas.height);
	//draw();
	circle();
	star();
	bike();
	flower();


}

var clear = function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = "black";
	context.fillRect(0,0,canvas.width, canvas.height);
	circle();
	flower();
	bike();
	star();
	drawImg();

}

var draw = function(){
	context.font = "30px Comic Sans MS";
	context.fillStyle = "black";
	context.textAlign = "center";
	context.fillText(drawtext, canvas.width/2, canvas.height/2);
}


//Objects

var circle = function(){
	context.beginPath();
	context.arc(0, 0, 75, 0, Math.PI * 2, true);
	context.stroke();
	context.fillStyle = "grey";
	context.fill();

}

var flower = function(){
	context.beginPath();

	//stem 
	context.moveTo(200, 150);
	context.lineTo(200, 140);
	
	//center

	context.moveTo(200, 140);
	context.arc(200, 135, 5, 0, Math.PI * 2, true);
	context.fillStyle = "yellow"
	context.fill();

	context.moveTo(200, 135);
	context.lineTo(200, 125);
	context.moveTo(200, 135);
	context.lineTo(190, 135);
	context.moveTo(200, 135);
	context.lineTo(210, 135);
	
	context.moveTo(200, 135);
	context.lineTo(207.2, 127.8);
	context.moveTo(200, 135);
	context.lineTo(192.8, 127.8);
	context.moveTo(200, 135);
	context.lineTo(207.2, 142.2);
	context.moveTo(200, 135);
	context.lineTo(192.8, 142.2);	

	context.closePath();
	context.strokeStyle = "white";
	context.stroke();
}

var bike = function(){
	context.beginPath();


	//frame
	context.moveTo(105, 130);
	context.lineTo(120, 130);
	context.moveTo(105, 130);
	context.lineTo(115, 140);
	context.moveTo(115, 140);
	context.lineTo(125, 140);
	context.moveTo(125, 140);
	context.lineTo(120, 130);
	context.moveTo(105, 130);
	context.lineTo(105, 140);

	//Handle Bars
	context.moveTo(105, 130);
	context.lineTo(105, 125);
	context.moveTo(105, 127);
	context.lineTo(108, 127);

	//Seat
	context.moveTo(115, 140);
	context.lineTo(120, 130);
	context.moveTo(120, 130);
	context.lineTo(120, 127);
	context.moveTo(117, 127);
	context.lineTo(123, 127);

	//wheels
	context.moveTo(105, 140);
	context.arc(105, 140, 5.5, 0, Math.PI * 2, true);
	context.moveTo(125, 140);
	context.arc(125, 140, 5.5, 0, Math.PI * 2, true);

	


	context.closePath();
	context.strokeStyle = "white";
	context.stroke();
}

var star = function(){
	context.beginPath();
	let centerX = 200;
	let centerY = 35;

	context.moveTo(centerX, centerY-15);
	context.lineTo(centerX, centerY+15);
	context.moveTo(centerX-10, centerY);
	context.lineTo(centerX+10, centerY);
	context.moveTo(centerX-5, centerY-5);
	context.lineTo(centerX+5, centerY+5);
	context.moveTo(centerX+5, centerY-5);
	context.lineTo(centerX-5, centerY+5);

	centerX = 150;
	centerY = 20;

	context.moveTo(centerX, centerY-15);
	context.lineTo(centerX, centerY+15);
	context.moveTo(centerX-10, centerY);
	context.lineTo(centerX+10, centerY);
	context.moveTo(centerX-5, centerY-5);
	context.lineTo(centerX+5, centerY+5);
	context.moveTo(centerX+5, centerY-5);
	context.lineTo(centerX-5, centerY+5);


	centerX = 75;
	centerY = 5;

	context.moveTo(centerX, centerY-15);
	context.lineTo(centerX, centerY+15);
	context.moveTo(centerX-10, centerY);
	context.lineTo(centerX+10, centerY);
	context.moveTo(centerX-5, centerY-5);
	context.lineTo(centerX+5, centerY+5);
	context.moveTo(centerX+5, centerY-5);
	context.lineTo(centerX-5, centerY+5);

	// context.moveTo(200, 25);
	// context.lineTo(195, 20);
	// context.moveTo(200, 25);
	// context.lineTo(205, 30);
	// context.moveTo(200, 25);
	// context.lineTo(195, 30);
	// context.moveTo(200, 25);
	// context.lineTo(205, 20);
	context.closePath();
	context.strokeStyle = "white";
	context.stroke();

}


//Button Event Listeners

var canvasClear = document.getElementById("clear");
var canvasFill = document.getElementById("colorselect");
var drawbtn = document.getElementById("draw");


//Get text box value
//Assign value to button
//change text on button click



window.onload = function(){
	context.fillStyle = "black";
	context.fillRect(0,0,canvas.width, canvas.height);
	//image
	let image = new Image();
 	image.onload = function() {
 	context.drawImage(image, 100, 100, 100, 100);
 	}
 	image.src = "http://www.cs.uoregon.edu/Classes/12S/cis115/seal.gif"


	circle();
	star();
	bike();
	flower();


	canvasClear.addEventListener("click", clear);
	canvasFill.addEventListener("change", fill);
	//drawbtn.addEventListener("click", draw);


}