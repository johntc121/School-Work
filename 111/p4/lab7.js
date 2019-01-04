"use strict";

var main = function () {

  //Examples of jQuery selectors
  //three ways to select the initial h2 element
  //console.log($("h2")[0].innerHTML);
  //console.log($("h2:eq(0)").html());
  //console.log($("h2").eq(0).html())

  //set style of the initial h2 using a pseudoclass selector
  //$("h2:first" ).css("color", "red");

  //change the content of the initial h2 
  //$("h2").eq(0).html("Ch-ch-ch-changes!");

//Complete these eight exercises:
//1. Select the initial h1 element.
$("h1" ).eq(0).css("backgroundColor", "DodgerBlue");
//2. Select the <h2> element by its class.
$("h2.important").css("backgroundColor", "Gold");
//3. Select all of the relevant paragraphs.
$("div.relevant p").css("backgroundColor", "Green")

//4. Select the first paragraph of the relevant paragraphs.
$("div.relevant p").eq(0).css("backgroundColor", "White")

//5. Select the third paragraph of the relevant paragraphs.
$("div.relevant p").eq(2).css("backgroundColor", "Red")

//6. Select the seventh relevant paragraph.//css method can take either a property name and value, 
//or a single object of key-value pairs.
$("div.relevant p").eq(6).css("backgroundColor", "Orange")

//7. Select all of the paragraphs on the page.
$("p").css("backgroundColor", "Purple")

//8. Select only the random, unattached paragraph
$(".a").eq(0).css("backgroundColor", "Grey")

};

$(document).ready(main);