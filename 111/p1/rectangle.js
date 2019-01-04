function rectangle(){
	var input =prompt("Enter an area: ")
	var input2 = prompt("Enter a width: ")
	var area = input
	var width = input2
	var length = area / width 
	var perimeter = (length * 2) + (width *2)

	alert('Area = ' + area + '\n' + 'Width = ' + width + '\n' + 'Length = ' + length
			+ '\n' + 'Perimeter = ' + perimeter + '\n' + 
			'Diagonal = ' + Math.sqrt((Math.pow(length, 2)) + (Math.pow(width, 2))))

	console.log('Area = ' + area + '\n' + 'Width = ' + width + '\n' + 'Length = ' + length
			+ '\n' + 'Perimeter = ' + perimeter + '\n' + 
			'Diagonal = ' + Math.sqrt((Math.pow(length, 2)) + (Math.pow(width, 2))))

}

