
function pizzaPSI(){
	"use strict"
	var input = prompt("Cost:")
	var input2 = prompt("Diameter:")
	var cost = input
	var diameter = input2
	var area = ((1/4)* Math.PI * Math.pow(diameter, 2))
	
	var costPSI = cost / area
	costPSI = costPSI.toFixed(2)
	console.log('Cost: ' + cost + '\n' + 'Diameter: ' + diameter)
	return ("$" + costPSI)

}
