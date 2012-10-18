function myFunction()
{
element=document.getElementById("demo");

if(element.innerHTML.match(/Click/))
{
element.innerHTML="Hello World";
}
else
{
element.innerHTML="Click the button to change the text in this paragraph";
}
};