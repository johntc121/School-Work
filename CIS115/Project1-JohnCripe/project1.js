/*
Name:        John
Course:      CIS 115
Assignment:  Project 1
Description: Description of self and random quotes for Project 1

*/

"use strict"

//https://www.w3schools.com/jsref/jsref_obj_date.asp --- Used for Datetime.
//https://www.w3schools.com/jsref/met_win_setinterval.asp --- Used for setInterval.


//Set and Update Time using setInterval
var update = setInterval(getDate, 500);

function getDate(){
	var date = Date();
	document.querySelector("div").innerHTML = date;
}



var quotes = new Array("The price of greatness is responsibilty", "Injustic anywhere is a threat to justice everywhere", "Here you leave today and enter the World of Yesterday, Tomorrow, and Fantasy", 
	"If you are worried about falling off the bike, you'd never get on", "Science without religion is lame, religion without science is blind");
var authors = new Array("Winston Churchill", "Martin Luther King Jr.", "Walt Disney", "Lance Armstrong", "Albert Einstein");

var updateQuote = setInterval(getQuote, 5000);

function getQuote(){
	var random = Math.floor(Math.random()*5)


	document.getElementById("quote").innerHTML = quotes[random];
	document.getElementById("author").innerHTML = "-" + authors[random];
}

document.onload = getDate();
document.onload = getQuote();