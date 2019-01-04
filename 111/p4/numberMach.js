var sumOfDigits = function(n){
    var sum = 0;

    while (n){
        sum += n % 10
        n = Math.floor(n / 10)
    }


    //for (var i = 0; i <= n.length; i++){
    //  sum += i

    //}
    return sum 
}   

//var sumOfDigits = function(n){
//  var s = n.toString()
//  s = s.split("")
//  var sum = 0;
//
//  for (var i = 0; i < s.length; i++){
//      sum += Number(s[i])

//  }
//  return sum 
//} 

//E

var isHarshad = function(x){
    if(x < 0)
        return "Try a positive number"

    if(x % sumOfDigits(x) == 0)
        return true
    else 
        return false

}

var hailStoneSeq = function(n){
    var seq = n 

    while(n != 1)
    {
        if(n % 2 == 0)
        {
            n = n / 2
            seq += ' ' + n
        }   
        else
        {   
            n = ((n * 3) + 1)
            seq += ' ' + n
        }

    }

    return seq  
}

var lengthOfHailstoneSeq = function(x){
    return hailStoneSeq(x).split(" ").length
}

var main = function() {
    var val = Number(document.querySelector("#input").value);
    var str = val.toString()

    //this keyword is set to the button that fired the event
    console.log(this.id);
    //dispatch on button id
    if (this.id == "btn1")
        document.querySelector("div").innerHTML = sumOfDigits(val);
    else if (this.id == "btn2")
        document.querySelector("div").innerHTML = isHarshad(val);
    else if (this.id == "btn3")
        document.querySelector("div").innerHTML = hailStoneSeq(val);
    else 
        document.querySelector("div.length").innerHTML = lengthOfHailstoneSeq(val);


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