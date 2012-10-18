function changeImage()
{
	/* find the picture in the page */
	element=document.getElementById('myimage')

/* if the picture source (URL) contains "business", change it */
	if (element.src.match("business"))
	{
		element.src="http://images.fastcompany.com/upload/081209-light-bulb-03.jpg";
	}

  /* otherwise, don't change the image */
	else
	{
		element.src="http://www.businesspundit.com/wp-content/uploads/2011/01/bulb.jpg";
	}
}

/* This is one way of doing it. Could you do it a different way?
   The two functions are almost the same: could you use a function parameter to reduce the amount of code?
*/

function changeImage2()
{
	/* find the picture in the page */
	element=document.getElementById('myimage2')

	/* if the picture source (URL) contains "business", change it */
	if (element.src.match("business"))
	{
		element.src="http://images.fastcompany.com/upload/081209-light-bulb-03.jpg";
	}

  /* otherwise, don't change the image */
	else
	{
		element.src="http://www.businesspundit.com/wp-content/uploads/2011/01/bulb.jpg";
	}
}