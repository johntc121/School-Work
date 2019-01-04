"use strict"

//A
var ltrToNato = function(ch){
	var x = ch
	var nato = 
	('{"A": "Alpha", "B": "Bravo", "C": "Charlie", "D": "Delta", "E": "Echo", "F": "Foxtrot", "G": "Golf", "H": "Hotel", "I": "India", "J": "Juliet", "K": "Kilo",\
	  "L": "Lima", "M": "Mike", "N": "November", "O": "Oscar", "P": "Papa", "Q": "Quebec", "R": "Romeo", "S": "Sierra", "T": "Tango", "U": "Uniform", "V": "Victor",\
	  "W": "Whiskey", "X": "X-Ray", "Y": "Yankee", "Z": "Zulu", "0" : "Zero", "1" : "One", "2" : "Two", "3" : "Three", "4" : "Four", "5" : "Five", "6" : "Six",\
	   "7" : "Seven", "8" : "Eight", "9" : "Niner"}')
	var natoLower = nato.toLowerCase()
	var natoAlpha = JSON.parse(nato)
	var natoAlphaLower = JSON.parse(natoLower)

	if (ch >= "A" && ch <= "Z")
		return natoAlpha[ch]
	else if (ch >= "a" && ch <= "z")
		return (natoAlphaLower[ch])
	else if(ch = ch.match(/[0-9]/g))
		return natoAlpha[ch]
	else 
		return x

}

//B

var wordToNato1 = function(str){
	var s = []
	for(var i = 0; i < str.length; i++)
	{
		s.push(ltrToNato(str[i]))

	}
	s = s.join(" ")
	return s.toString()
}



var wordToNato2 = function(str){
	var s = []

	for(var i = 0; i < str.length; i++)
	{
		s.push(wordToNato1(str[i]))
	}
	s = s.join(" ")
	return s.toString()
}

var main = function() {
	var val = String(document.querySelector("#input").value);
    document.querySelector("div").innerHTML = wordToNato2(val)
    ;
};

window.onload = function() {
    document.querySelector("button").addEventListener("click", main);
};