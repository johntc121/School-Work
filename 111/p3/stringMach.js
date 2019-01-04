"use strict"

function countStr(n){
    n.toString()
    var length = n.length
    return length
}

function reverseString(str){
    var newString = ""

    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString
}

function countVowels(str) {
  var x = str.match(/[aeiou]/gi);
  return x === null ? 0 : x.length;
}

function countDigits(n) {
    var digits = n.match(/[0-9]/g)
    return digits === null ? 0 :digits.length
}

var isPunct = function(ch){

  if(ch = ch.match(/[,.!?;:'-]/g))
    return true
  else
    return false
}


//B

var compress = function(s){
    var result = "";

    //loop to traverse s
    for(var i =  0; i < s.length; i++){
        ch = s[i];
        if(!isPunct(ch) || ch == " ")
            result = result + ch
            result = result.replace(/\s/g, '');

    }

    return result

}



//var isAlphaR = function(ch){
  //var letters = /[a-z]/i;
 // return letters.test(ch);
// };

//1. One Ring to Rule Them All
var main = function() {
    var val = String(document.querySelector("#input").value);
    var str = val.toString()

    //this keyword is set to the button that fired the event
    console.log(this.id);
    //dispatch on button id
    if (this.id == "btn1")
        document.querySelector("div").innerHTML = countStr(val);
    else if (this.id == "btn2")
        document.querySelector("div").innerHTML = reverseString(val);
    else if (this.id == "btn3")
        document.querySelector("div").innerHTML = countVowels(val);
    else if (this.id == "btn4")
        document.querySelector("div").innerHTML = countDigits(val);
    else if (this.id == "btn5")
        document.querySelector("div").innerHTML = isPunct(str);
    else
        document.querySelector("div").innerHTML = compress(val);

};

//2. register the onclick handlers after the DOM is complete
window.addEventListener("load", function() {

    //select the buttons
    var buttons = document.querySelectorAll("button");

    //register the same handler for each button
    for (var i = 0; i < buttons.length; ++i) {
        buttons[i].addEventListener("click", main);
    }

});