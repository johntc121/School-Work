
/*
Name:        John
Course:      CIS 115
Assignment:  Project 5
Description: Simple Pong Game

*/





"use strict"


const canvas = document.getElementById("mycanvas");
const context = canvas.getContext("2d");

class Vect{
	constructor(x = 0, y = 0){
		this.x = x;
		this.y = y;
	}
}

class Vect3{
		constructor(){
	}

}

class Ball{
	constructor(x, y, r, sA, eA){
		this.pos = new Vect;
		this.size = new Vect3(r, sA, eA);
		this.velocity = new Vect;
	}

	get bottom(){
		return this.pos.y + this.size.r;
	}
}

class Player{
	constructor(w, h){

		this.pos = new Vect;
		this.size = new Vect(w, h);
		this.velocity = new Vect;
	}

	get leftCorner(){
		return this.pos.x;
	}

	get rightCorner(){
		return this.pos.x + this.size.x;
	}

}


var player = new Player(100, 20);
player.pos.x = canvas.width/2 - player.size.x/2
player.pos.y = canvas.height - player.size.y;
player.velocity.x = 12;
player.velocity.y = 12;


console.log(player);

function move(e){
	if(e.keyCode==39){
		//clear(); //clears previous sprite
		player.pos.x += player.velocity.x
	}

	if(e.keyCode==37){
		//clear();
		player.pos.x -= player.velocity.x;
	}

	window.requestAnimationFrame(move);
}

	// ball.pos.x += ball.velocity.x;
	// ball.pos.y += ball.velocity.y;



// var ball = {
// 	pos:{
// 		x: 0,
// 		y: 0
// 	},
// 	size:{
// 		r: 0,
// 		sA: 0,
// 		eA: 0
// 	},
// 	velocity:{
// 		x:0,
// 		y:0
// 	}
// }

const ball = new Ball;
ball.pos.x = 50;
ball.pos.y = 50;

ball.size.r = 5;
ball.size.sA = 0;
ball.size.eA = Math.PI * 2;
console.log(ball);

ball.velocity.x = 5;
ball.velocity.y = 5;

function drawBall(){
	context.fillStyle = '#000';
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.beginPath();
	context.arc(ball.pos.x, ball.pos.y, ball.size.r, ball.size.sA, ball.size.eA);
	context.stroke();
	context.fillStyle = "white";
	context.fill();

}

function drawPlayer(){
	context.fillStyle = 'white';
	context.beginPath();
	context.stroke();
	context.fillRect(player.pos.x, player.pos.y, player.size.x, player.size.y);
}


function Pong(){
	context.fillStyle= "black";
	context.fillRect(0, 0, canvas.width, canvas.height);

	drawPlayer();
	drawBall();

	update();

}

function clearCanvas(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	Pong();
}

function ballReset(){
	ball.pos.x = 50;
	ball.pos.y = 50;

	ball.velocity.x = 5;
	ball.velocity.y = 5;
}

var points = 0;

function losePoint(){
	points = points + 1

	ballReset();

	context.fillStyle = "white";

	document.getElementById("score").innerHTML = "SCORE: " + points;


}


function update(){

	ball.pos.x += ball.velocity.x;
	ball.pos.y += ball.velocity.y;

	if(ball.pos.x < 0 || ball.pos.x > canvas.width){
		ball.velocity.x = -ball.velocity.x;
	}
	if(ball.pos.y < 0){
		ball.velocity.y = -ball.velocity.y;
	}
	if(ball.pos.y > canvas.height){
		ball.velocity.y = -ball.velocity.y;
		console.log("You lose")
		clearCanvas()
		losePoint();
		return;

	}

	if(ball.bottom === player.pos.y && player.leftCorner < ball.pos.x && ball.pos.x < player.rightCorner){
		ball.velocity.y = -ball.velocity.y;


	}



	drawBall();
	drawPlayer();

	window.requestAnimationFrame(update);

}

var restartButton = document.getElementById("restart");


function restart(){
	
	losePoint();
	points = 0;
	document.getElementById("score").innerHTML = "SCORE: " + points;
}






window.onload = function(){
	window.onkeydown = move;


	Pong();
	restartButton.addEventListener("click", restart);

};