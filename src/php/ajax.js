var ajaxConnection = false;

function ajaxFunction(phpPage)
{
    ajaxConnection = false;

	try
	{
		ajaxConnection = new XMLHttpRequest();
	} 
	catch (e)
	{
		alert("Unfortunately this page is not compatible with your web browser.");
		return false;
	}

    ajaxConnection.onreadystatechange = ajaxReply; // whenever the ready state is changed
	ajaxConnection.open('GET', phpPage, true); // opens a request to server
	ajaxConnection.send(null); // closes the request
	// Now, the code waits unless the ready state changes.

	return true;
}

function ajaxReply() {

	if (ajaxConnection.readyState == 4) //if page loaded successfully
	{
		if (ajaxConnection.status == 200) //if get OK response
		{
			document.getElementById('Ajax').innerHTML = ajaxConnection.responseText;
		}

		else 
		{ // if the status code is anything else (a rare case though)

			alert('Something weird occurred. HTTP error code ' + ajaxConnection.status.toString() + '.');
			return; // exit

		}

	} // end if

} // end function ajaxReply
