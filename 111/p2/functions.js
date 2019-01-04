function avg3(x, y, z){
	var avg = (x + y + z)/3

	return avg

}

function getTip(cost, perc){
	var tip = cost * perc
	console.log(tip)

	var tipString = cost * perc
	tipString = tipString.toFixed(2)
	console.log("$" + tipString)


}

function pizzaPSI(cost, diameter){
	var area = ((1/4)* Math.PI * Math.pow(diameter, 2))
	
	costPSI = cost / area
	costPSI = costPSI.toFixed(2)
	return ("$" + costPSI)
}

function pizzaPSI(cost, diameter){
		var area = ((1/4)* Math.PI * Math.pow(diameter, 2))
	
	var costPSI = cost / area
	costPSI = costPSI.toFixed(2)
	return ("$" + costPSI)
}

var isAlpha = function(ch){
  return typeof ch === "string" && ch.length === 1
         && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}



var isAlpha = function(ch){
	ch = ch.toLowerCase();
  if(ch >= "a" && ch <= "z")
  	return true;
  else 
  	return false
}



