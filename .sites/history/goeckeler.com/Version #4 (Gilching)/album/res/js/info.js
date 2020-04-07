//// CAMERA-INFO/EXIF section

var showing = false;
function toggleInfo() 
{
	if (showing == false) 
	{
		if (document.all || document.getElementById)
			document.getElementById('imageexif').style.visibility="visible";	// IE & Gecko
		else
			document.layers['imageexif'].visibility="show"; // Netscape 4
		showing = true;
	}
	else 
	{
		if (document.all || document.getElementById)
			document.getElementById('imageexif').style.visibility="hidden";	// IE & Gecko
		else
			document.layers['imageexif'].visibility="hide";	// Netscape 4
		showing = false;
	}

	// For JS keyboard support
	takenAction = false;
}
