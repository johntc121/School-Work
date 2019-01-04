function flipcase(s){
	var newStr = Array()
	for (var i = 0; i < s.length; i++)
	{
		if (s.charAt(i) == s.charAt(i).toUpperCase()) 
		{
			var temp = s.charAt(i).toLowerCase()
			newStr.push(temp)
		}
		else if (s.charAt(i) == s.charAt(i).toLowerCase())
		{
			var temp2 = s.charAt(i).toUpperCase()
			newStr.push(temp2)
		}
	}
	newStr = newStr.toString()
	newStr = newStr.replace(/,/g, "")

	return newStr
}

function maxWord(s){
	var compStr = ""
	for (var i = 0; i < s.length; i++)
	{
		if (compStr.length < s[i].length)
		{
			compStr = s[i]
		}
	}
	return compStr
}

function maxWord2(s){
	s = s.split(" ")
	var compStr = ""
	for (var i = 0; i < s.length; i++)
	{
		if (compStr.length < s[i].length)
		{
			compStr = s[i]
		}
	}
	return compStr

}
