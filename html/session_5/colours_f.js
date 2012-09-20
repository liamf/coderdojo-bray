// When the window loads, run the generatePage() function
window.onload = generatePage;

// Initially, we're not changing our colour
var colourChanging = false;

// Remember the timer id
var colourTimer;

// A different way of setting the colours: using variables
// Make an array of colours which we will use
var myColours = new Array();
myColours[0] = "#FF0000";
myColours[1] = "#00FF00";
myColours[2] = "#0000FF";
myColours[3] = "#FFFF00";

var firstColour = 0;

// Makes our boxes 
function generatePage() {

    // Make our left column
    leftCol = document.createElement('div');
    leftCol.id = 'leftcolumn';
	
	// Add two boxes to this column
	leftCol.appendChild(makeBox("box1"));
	leftCol.appendChild(makeBox("box4"));
	
	// Make our right column
    rightCol = document.createElement('div');
    rightCol.id = 'rightcolumn';
	
	// Add two boxes to this column
	rightCol.appendChild(makeBox("box2"));
	rightCol.appendChild(makeBox("box3"));
	
	// Find the container element on the page
	container = document.getElementById('content-container');
	
    // Insert these two columns into it
	// Insert them before the footer
	container.insertBefore(rightCol, container.firstChild);
	container.insertBefore(leftCol, container.firstChild);	
	
	// Now "register" a function to be called when we press a key
    document.body.onkeypress = toggleColourChange;
}
	
	
// Helper function to make a box
function makeBox(boxId) {
	box = document.createElement('div');
	box.id = boxId;
	box.setAttribute("class","box");
	return box;
}

// toggles Colour changing on/off
function toggleColourChange() {
	colourChanging = !colourChanging;

	if( colourChanging == true)
	{
		setColours();
	}
	else
	{
		clearTimeout(colourTimer);
	}
}

// Sets the colour of an element identifyed by id to a colour
function setOneColour(idToChange, colourToSet) {
	
	// Find the element to change, using it's ID
    // Get the ball by searching for it by id 
    var e = document.getElementById(idToChange);
	
	// Change it's colour
	e.style.backgroundColor = colourToSet;
}


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

	colourTimer = setTimeout("setColours()",2000);

}

