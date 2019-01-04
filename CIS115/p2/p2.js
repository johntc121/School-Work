/*
Name:        John
Course:      CIS 115
Assignment:  Project 2
Description: Location Finder

*/

// (3) Add the ability to click on a marker and display information about the marker
// No inline JavaScript code
// No inline or embedded CSS

"use strict"


// Populates the Selection Array
var MagicKingdom = {description: "Magic Kingdom Park", latitude: 28.417713, longitude: -81.581206}
var Epcot = {description: "Epcot", latitude: 28.374786, longitude: -81.549396}
var AnimalKingdom = {description: "Disney's Animal Kingdom Theme Park", latitude: 28.359792, longitude: -81.591316}
var HollywoodStudios = {description: "Disney's Hollywood Studios'", latitude: 28.357568, longitude: -81.558275}

var populate = document.getElementById("locationSelect");
var selected = document.getElementById("locationSelect");
var locations = [MagicKingdom, Epcot, AnimalKingdom, HollywoodStudios];


var centerButton = document.getElementById("Center");

var getMyLocation = document.getElementById("Current")

var marker;

var map;



for(var i = 0; i < locations.length; i++){
	var pop = locations[i];
	var x = document.createElement("option");
	x.textContent = pop.description;

	x.value = pop.description;
	selected.append(x);
}




var locationSelection = function(){

	//console.log(selected.value);

	let selectedLocation;

	for(var i = 0; i <locations.length; i++){
		if(selected.value === locations[i].description){
			selectedLocation = locations[i];
		}
	}

	document.getElementById("description").innerHTML = "Description: " + selectedLocation.description;
	document.getElementById("location").innerHTML =  `Latitude: ${selectedLocation.latitude}, Longitude: ${selectedLocation.longitude}`;


	let location = new google.maps.LatLng(selectedLocation.latitude, selectedLocation.longitude);
	map.panTo(location);
	map.zoom = 15;
	addMarker(location);
	
}

//center on marker

var centerMap = function(){
	map.panTo(marker.position);
}


//map options


//Current Location


var myLocation = function(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation);
	}
	else{
		alert("No Location");
	}
}

var displayLocation = function(position){
	selected.selectedIndex = 0;

	map.zoom = 10;

	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	let altitude = position.coords.altitude;
	document.getElementById("description").innerHTML = "Description: You are where you are!"
	document.getElementById("location").innerHTML =  `You are at Latitude: ${latitude}, Longitude: ${longitude}`;

	var location = new google.maps.LatLng(latitude, longitude);
	map.panTo(location);


	addMarker(location);
}



//map
var showMap = function(coords){
	var latLong = new google.maps.LatLng(0,0);
	var zoom = 0;

	let mapOptions = {
		zoom: zoom,
		center: latLong,
		mapTypeId: "satellite"
	};

	let mapDiv = document.getElementById("map");
	map = new google.maps.Map(mapDiv, mapOptions);

	// addMarker(latLong);
}



var addMarker = function(latAndLong){
	 marker = new google.maps.Marker({
		position: latAndLong,
		map: map
	})

	map.setCenter(latAndLong);

}


window.onload = function(){
	selected.addEventListener("change", locationSelection);
	// myLocation();
	showMap();
	getMyLocation.addEventListener("click", myLocation);
	centerButton.addEventListener("click", centerMap);
}