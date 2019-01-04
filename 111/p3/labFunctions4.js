"use strict"

var isAlpha = function(ch){
	ch = ch.toLowerCase();
  if(ch >= "a" && ch <= "z")
  	return true;
  else 
  	return false
}

function countLetters(ch){
	var total = 0
	for (var i = 0; i < ch.length; i++)
	{
		if (isAlpha(ch.charAt(i)) == true)
		{
			total++
		}
	}
	return total
}

function count0occurences (str, ch){
	var total = 0
	for (var i = 0; i < str.length; i++)
	{
		if (str.charAt(i) == ch)
		{
			total++
		}
	}
	return total
}