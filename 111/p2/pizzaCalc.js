"use strict"

function pizzaPSI(cost, diameter){
		var area = ((1/4)* Math.PI * Math.pow(diameter, 2))
	
	var costPSI = cost / area
	costPSI = costPSI.toFixed(2)
	return ("$" + costPSI)
}

var input = prompt("Cost:")
var input2 = prompt("Diameter:")
var PSI = pizzaPSI(input, input2)

document.querySelector("div").innerHTML = (("Cost: ") + input + "<br />" + ("Diameter: ") + input2 + "<br />"
		+ ("Cost PSI: ") + PSI)



