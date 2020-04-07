///// JavaScript Navigation for index /////

// Variables from setupIndex.js: nextIndexPageUrl, prevIndexPageUrl, parentIndexPageUrl, firstIndexPageUrl, lastIndexPageUrl 

function nextPage() 
{
	if ( nextIndexPageUrl) 
		document.location=nextIndexPageUrl;
	takenAction = false;
}

function prevPage() 
{
	if ( prevIndexPageUrl) 
		document.location=prevIndexPageUrl;
	takenAction = false;
}

function indexPage() 
{
	if ( parentIndexPageUrl) 
		document.location=parentIndexPageUrl;
	takenAction = false;
}

function firstPage() 
{
	if ( firstIndexPageUrl) 
		document.location=firstIndexPageUrl;
	takenAction = false;
}

function lastPage() 
{
	if ( lastIndexPageUrl) 
		document.location=lastIndexPageUrl;
	takenAction = false;
}

function navSlideShow() 
{
	takenAction = false;
}

function navToggleInfo() 
{
	takenAction = false;
}
