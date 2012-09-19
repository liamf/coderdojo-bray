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

// A different way of setting the colours: using variables
// Make an array of colours which we will use
var myColours = new Array();
myColours[0] = "#FF0000";
myColours[1] = "#00FF00";
myColours[2] = "#0000FF";
myColours[3] = "#FFFF00";

var firstColour = 0;

function setColours() {
	
	// All we do here is set the 4 divs to different colours
    // The colours we set depends on the firstColour variable	
	for(i=1; i<=4; i++ )
	{
		var div = 'box' + i;
		var colourEntry = (firstColour + i - 1) % 4;
		setOneColour(div, myColours[colourEntry]);
	}
	
	// Pick the start colour for the next time
	firstColour = (firstColour + 1) % 4;
	
	// Now set a timer: when the timer expires, run this function again
    t = setTimeout("setColours()",2000);
}

