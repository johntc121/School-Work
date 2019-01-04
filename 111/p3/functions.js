"use strict"

//Project 3

// A
function isVowel(ch){
	ch = ch.toLowerCase();
	if(ch == "a" || ch == "e" || ch == "i" || ch == "o" ||
		ch == "u" || ch == "y" )
		return true;
	else
		return false

}

// B
 
function isVowelR(str) {

  if(str = str.match(/[aeiou]/gi))
  	return true
  else
  	return false
}

// C

function isDigit(x) {
  if(x = x.match(/[0-9]/g))
  	return true
  else
  	return false
}

// D

function countVowels(str) {
	var count = 0
	for (var i = 0; i < str.length; i++)
	{
		if (i == isVowelR(str[i]))
		{
			count++
		}
	}

	return count
	
}

// E

function reverseString(str){
    var newString = ""

    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString
}

///function countVowels(str) {
//	var x = isVowelR
//		return x.length
//}
