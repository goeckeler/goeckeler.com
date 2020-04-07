//// Slideshow section...

// Variables from setup.js: seconds, timerID, exp, pauseIconUrl, playIconUrl

// START/STOP Slideshow
function toggleSlideShow(exp) 
{
	var on = getCookie('slideShowOn');
	if( on!=null )
		dontSlides(exp);
	else
		doSlides(exp);
	
	// For JS keyboard support
	takenAction = false;
}

function setSlideShowStatus(status) 
{
	if (document.all || document.getElementById) 
	{
		if( status==true ) 
			document.getElementById('slide_show').src=pauseIconUrl;
		else 
			document.getElementById('slide_show').src=playIconUrl;
	}
}

//start slideshow
function doSlides(exp) 
{
	setCookie("slideShowOn", "on", exp);
	setSlideShowStatus(true);
	timerID = setTimeout('nextPage()', seconds * 1000);
}

//stop slideshow
function dontSlides(exp) 
{
	deleteCookie("slideShowOn");
	setSlideShowStatus(false);
	clearTimeout(timerID);
}

function getCookieVal(offset) 
{
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
		endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

function getCookie(name) 
{
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;

	while (i < clen) 
	{
		var j = i + alen;
		
		if (document.cookie.substring(i, j) == arg) 
			return getCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) 
			break;
	}
	return null;
}

function setCookie(name, value) 
{
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	var path = (argc > 3) ? argv[3] : null;
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : false;

	document.cookie = name + "=" + escape (value) +
		((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
		((path == null) ? "" : ("; path=" + path)) +
		((domain == null) ? "" : ("; domain=" + domain)) +
		((secure == true) ? "; secure" : "");
}

function deleteCookie(name) 
{
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);

	document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
