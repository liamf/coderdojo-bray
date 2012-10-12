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