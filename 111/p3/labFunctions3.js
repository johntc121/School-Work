"use strict"

function sumOddInts(odds){
	if (odds < 0)
		return 0

	var sum = 0

	for (var i = 0; i <= odds; i++)
	{

		if (i % 2 == 1)
		{

			sum += i
		}

	}

	return sum
}

var input = prompt("Enter a positive integer: ")
var results = sumOddInts(input)
document.querySelector("div").innerHTML = results