function doAlert(msg) {
	alert(msg)
}

doAlert(711)

function getDiagonal(length, width){
	return Math.sqrt((Math.pow(length, 2)) + (Math.pow(width, 2)))
}

function compare_v1(arg1, arg2) {
	if (arg1 > arg2)
		return true
	else
		return false
}

function compare_v2(arg1, arg2){
	if (typeof(arg1) == "number" && typeof(arg2) == "number")
		if (arg1 > arg2)
			return true
		else
			return false
	else return false

}
