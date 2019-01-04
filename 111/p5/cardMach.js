"use strict"
var rank = 
	'{"1": "Ace", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10",\
	  "11": "Jack", "12": "Queen", "13": "King"}'

var getRank = function(x){

	rank = JSON.parse(rank)

	return rank[x]
}

var getSuit = function(x){
	var suit = 
	'{"1": "Hearts", "2": "Spades", "3": "Diamonds", "4": "Clubs"}'
	var suit = JSON.parse(suit)
	return suit[x]
}


var dealCard = function(el){
		return getRank(el.value)
}

//var main = function() {
    
  //  console.log(this.id);

    //if (this.id == "btn1")
    //{	
      //  dealCard(this)
    //}    


//};

window.addEventListener("load", function() {

    //select the buttons
    var buttons = document.querySelectorAll("button");

    //register the same handler for each button
    for (var i = 0; i < buttons.length; ++i) {
        buttons[i].addEventListener("click", function()
        {
        	console.log(this.id);

        	if (this.id == "btn1")
        	{
        		dealCard(this)
        	}
        }
       )
    }

});