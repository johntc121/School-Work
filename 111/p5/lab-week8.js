var main = function () {
 //dispatch on button id
 	if (this.id == "btn1")
 	{
 		createList()
 	}
	else if (this.id == "btn2")
 	{
 		addItem()

 	}
 	else if (this.id == "btn3")
 	{
 		changeList()
 	}
 	else if (this.id == "btn4")
 	{
 		removeItem()
 	}
}
window.onload = function() {
 	var buttons = document.querySelectorAll("button");
 	for (var i = 0; i < buttons.length; ++i)
 	{
 	buttons[i].addEventListener("click", main);
 	}
}

function createList(){
	var list = document.createElement("ol")
	var div = document.querySelector("#outDiv")
	list.setAttribute("id", "newList")
	div.appendChild(list)
}

function addItem(){
	var list = document.querySelector("#newList")
	var item = document.createElement("li")
	var input = document.querySelector("#drink").value
	item.textContent = input
	list.appendChild(item)
}

function changeList(){
	var input = document.querySelector("#type").value
	var list = document.querySelector("#newList")
	list.setAttribute("type", input)
}

function removeItem(){
	var list = document.querySelector("#newList")
	list.removeChild(list.lastChild)
}




