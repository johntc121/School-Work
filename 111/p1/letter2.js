function letter(){
	var length = 8.5
	var width = 11
	var perimeter = (length * 2) + (width *2)
	var diagonal = Math.sqrt((Math.pow(length, 2)) + (Math.pow(width, 2)))
	alert("For an 8.5 x 11 sheet of paper:" + '\n' + "Perimeter = " + perimeter + '\n'
			+ "Diagonal = " + diagonal)

	console.log("For an 8.5 x 11 sheet of paper:" + '\n' + "Perimeter = " + perimeter + '\n'
			+ "Diagonal = " + diagonal)
}