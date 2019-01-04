"use strict";

//helper functions

var isVowel = function(ch) {
    var vowels = /[aeiouy]/i;
    return vowels.test(ch);
};

var isDigit = function(ch) {
    var digits = /[0-9]/;
    return digits.test(ch);
};

var countVowels = function(s){
    var vowelCount = 0; 

    for(var i = 0; i < s.length; ++i){
        if (isVowel(s.charAt(i)))
            ++vowelCount;
    }
    return vowelCount;
};

var countDigits = function(s){
    var count = 0; 

    for(var i = 0; i < s.length; ++i){
        if (isDigit(s.charAt(i)))
            ++count;
    }
    return count;
};

var reverseStr = function(s){
  var result = "";

  //reverse the characters in s
  for(var i = 0; i < s.length; ++i){
    result = s.charAt(i) + result;
  }

  return result;
};

//1. define the onclick handler
var main = function() {

    //dispatch on button id
    if (this.id == "btn1"){
        //get user input
        var str = document.querySelector("input").value;
        $("div").HTML("Length = " + str.length); 
    }
    else if (this.id == "btn2"){
        //get user input
        var str = document.querySelector("input").value;
        document.querySelector("div").innerHTML = 
           "Reverse = " + reverseStr(str);
    }
    else if (this.id == "btn3"){
        //get user input
        var str = document.querySelector("input").value;
        document.querySelector("div").innerHTML = 
           "Number of vowels = " + countVowels(str);
    }
    else if (this.id == "btn4"){
        //get user input
        var str = document.querySelector("input").value;
        document.querySelector("div").innerHTML = 
           "Number of digits = " + countDigits(str);
    }
};

//2. register the onclick handlers after the DOM is complete
/*window.onload = function() {

    //select the buttons
    var buttons = document.querySelectorAll("button");

    //register the same handler for each button
    for (var i = 0; i < buttons.length; ++i) {
        buttons[i].addEventListener("click", main);
    }

};*/