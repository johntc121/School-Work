function main() {

    //p. 242
    document.querySelector("#theTitle").textContent = "Oppa Gangnam Style!";

    var title = document.querySelector("#theTitle");
    alert(title.getAttribute("id"));

    //p. 243
    var imgElem = document.querySelector("img");
    imgElem.setAttribute("src",
        "http://www.cs.uoregon.edu/Classes/16F/cis111/images/mwm-card.png");
    imgElem.setAttribute("width", "250");

    //p. 249
    var h1 = document.querySelector("h1");
    //note: CSS property is background-color, 
    //  but hyphens are illegal in JavaScript
    h1.style.backgroundColor = "#D93600";

    //p. 250
    h1.classList.add("obliqueYellow");

    var h2 = document.querySelector("h2");
    h2.classList.add("italicOrange");
    imgElem.classList.add("basicBorder");

    //removing style classes
    //imgElem.classList.remove("basicBorder");
}

window.addEventListener("load", main);