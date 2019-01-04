var isAlpha = function(ch){



	//if ch is greater than or equal to "a" AND
	// ch is less than or equal to "z" then it is alphabetic

}

var ltr ="a", digit =7;
alert(isAlpha(ltr));
alert(isAlpha(digit))


var input = prompt("Enter a character")
var isAlpha = function(ch){
	if (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z"){
		return true
	} else{
		return false
	}
}
alert(isAlpha(input))

var isAlpha = function(ch){
  return /[A-Z]/i.test(ch);
}

var input = prompt("Enter a character")
var isAlpha = function(ch){
  return typeof ch === "string" && ch.length === 1
         && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}
alert(isAlpha(input))

var isAlpha = function(ch){
  return typeof ch === "string" && ch.length === 1
         && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}