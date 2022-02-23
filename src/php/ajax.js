var ajaxConnection = false;

function ajaxFunction(phpFile, divOutput)
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

    ajaxConnection.onreadystatechange = ajaxReply(divOutput); // whenever the ready state is changed
	ajaxConnection.open('GET', phpFile, true); // opens a request to server
	ajaxConnection.send(null); // closes the request
	// Now, the code waits unless the ready state changes.

	console.log(ajaxConnection);
	return;
}

function ajaxReply(divOutput) {

	if (ajaxConnection.readyState == 4) //if page loaded successfully
	{
		if (ajaxConnection.status == 200) //if get OK response
		{
			document.getElementById(divOutput).innerHTML = ajaxConnection.responseText;
		}

		else 
		{
			alert('An error occurred. HTTP error code: ' + ajaxConnection.status.toString() + '.');
			return;
		}
	}
}

export default ajaxFunction;