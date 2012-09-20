// When the window loads, run the setColours() function
window.onload = setColours;

// Sets the colour of an element identifyed by id to a colour
function setOneColour(idToChange, colourToSet) {

	// This is a super simple function
	
	// Find the element to change, using it's ID
    // Get the ball by searching for it by id 
    var e = document.getElementById(idToChange);
	
	// Change it's colour
	e.style.backgroundColor = colourToSet;
}

function setColours() {
	// All we do here is set the 4 divs to different colours
	
	// topleft, red
	setOneColour('topleft','#FF0000');
	
	// topright, green
	setOneColour('topright','#00FF00');
	
	// bottomleft, blue
	setOneColour('bottomleft','#0000FF');
	
	// bottomright, yellow
	setOneColour('bottomright', '#FFFF00');
	
}

