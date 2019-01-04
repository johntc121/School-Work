"use strict"

//Project 4

//A

var isPunct = function(ch){

  if(ch = ch.match(/[,.!?;:'-]/g))
  	return true
  else
  	return false
}


//B

var compress = function(s){
	var result = "";

	//loop to traverse s
	for(var i =  0; i < s.length; i++){
		ch = s[i];
		if(!isPunct(ch) || ch == " ")
			result = result + ch
			result = result.replace(/\s/g, '');

	}

	return result

}

// C
var isPal = function(str){
	str = str.toLowerCase()
	var s = ""

    for (var i = str.length - 1; i >= 0; i--) {
        s += str[i]
    }

    newString = compress(s)
    //return newString

    if(compress(str) == newString)
    	return true
    else 
    	return false

}




// D

var sumOfDigits = function(n){
	var sum = 0;

	while (n){
		sum += n % 10
		n = Math.floor(n / 10)
	}


	//for (var i = 0; i <= n.length; i++){
	//	sum += i

	//}
	return sum 
}	

//var sumOfDigits = function(n){
//	var s = n.toString()
//	s = s.split("")
//	var sum = 0;
//
//	for (var i = 0; i < s.length; i++){
//		sum += Number(s[i])

//	}
//	return sum 
//}	

//E

var isHarshad = function(x){
	if(x < 0)
		return "Try a positive number"

	if(x % sumOfDigits(x) == 0)
		return true
	else 
		return false

}

var hailStoneSeq = function(n){
	var seq = n 

	while(n != 1)
	{
		if(n % 2 == 0)
		{
			n = n / 2
			seq += ' ' + n
		}	
		else
		{	
			n = ((n * 3) + 1)
			seq += ' ' + n
		}

	}

	return seq  
}

function isOdd(n){
	if(n % 2 == 1)
		return "Odd"
	if(n % 2 == 0)
		return "even"
}