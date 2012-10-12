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
/*	leftCol.appendChild(makeBox("box4"));*/
	
	// Make our right column
    rightCol = document.createElement('div');
    rightCol.id = 'rightcolumn';

/*
	// Add two boxes to this column
	rightCol.appendChild(makeBox("box2"));
	rightCol.appendChild(makeBox("box3"));

*/
	
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
		setColours('#333');
	}
}

// Sets the colour of an element identifyed by id to a colour
function setOneColour(idToChange, colourToSet) {
	
	// Find the element to change, using its ID
    var e = document.getElementById(idToChange);
    var step=1;
	
	// Change its colour
	e.style.backgroundColor = colourToSet;

	// Change its position, too
	e.style.position = "relative"; 
	var delta = 1;
	var left = e.offsetLeft;
	
	if(left>=600)
	{
		delta=-600	
	}
	else
	{
		delta=1
	}
	
	e.style.left = left + delta + 'px';

	// Update the score
    var e2 = document.getElementById("score");
	e2.innerHTML='<b>Score: '+left + "</b>";
}

// set the colours to a fixed colour, if one is passed in, or else use the list of colours as before
function setColours(fixedColour) {
	
	// Check to see if the variable passed in is defined or not using the built-in function "typeof"
	if( typeof fixedColour != 'undefined' )
	{
		for( i=1; i<=4; i++ )
		{
			var div = 'box' + i;
			setOneColour(div,fixedColour);
		}
	}
	else
	{
		for(i=1; i<=1; i++ )
		{
			var div = 'box' + i;
			var colourEntry = (firstColour + i - 1) % 4;
			setOneColour(div, myColours[colourEntry]);
		}
		
		// Pick the start colour for the next time
		firstColour = (firstColour + 1) % 4;
		
		// Now set a timer: when the timer expires, run this function again
		colourTimer = setTimeout("setColours()",60);
	}
}


