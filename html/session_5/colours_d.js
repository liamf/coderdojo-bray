// When the window loads, run the setColours() function
window.onload = setColours;

// Sets the colour of an element identifyed by id to a colour
function setOneColour(idToChange, colourToSet) {

	// This is a super simple function
	
	// Find the element to change, using its ID
    var e = document.getElementById(idToChange);
	
	// Change its colour
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
		
		// This looks hard!
		// This is a simple "algorithm" for figuring out which of the items in myColours I will pick
		// An algorithm is a step-by-step procedure for calculating an answer
		// I need to pick 0, 1, 2 or 4 depending on whether my selected div is box1, box2, box3 or box4
		// And I am rotating the colours of my boxes to give me an animated effect.
		
		// This says "set colourEntry equal to what you get by adding the value of i to the value of firstColour and taking away 1,
		// then dividing the answer by 4 and taking the remainder".
		
		// Work it out on a piece of paper to see what happens if firstColour = 0, 1, 2 or 3
		
		// When you understand this, you've understood your first programming algorithm!
		var colourEntry = (firstColour + i - 1) % 4;
		setOneColour(div, myColours[colourEntry]);
	}
	
	// Pick the start colour for the next time.
	// Why do we say % 4 here? (divide by 4 and take the remainder)?
	firstColour = (firstColour + 1) % 4;
	
	// Now set a timer: when the timer expires, run this function again
	// This is what makes it animate: every 2000 milliseconds, it picks the next colour
    t = setTimeout("setColours()",2000);
}

