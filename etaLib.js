/* etaLib.js */
function enumerateObjectOldWays(o) {
	var thing,
	strMessage = "old ways - ";
	for ( thing in o ) {
		strMessage += "targetObject." + thing + " = " + o[thing] + "\n";
	}
	alert(strMessage);
}

function enumerateObject(o) {
	var arrKeys = Object.keys(o),
	strMessage = "",
	i = 0,
	arrKeysLength = arrKeys.length;

	for (i=0; i<arrKeysLength; i++) {
		strMessage += "myObject." + arrKeys[i] + " = " + o[arrKeys[i]] + "\n";
	}
	alert(strMessage);
}

/* taken from http://jscriptpatterns.blogspot.co.id/2013/01/javascript-interfaces.html */
/* interface javascript patterns, so u want interface heh? go java ...  */
function implements(object) {
    for (var i = 1; i < arguments.length; i++) { // Looping through all arguments 
        // after the first one.
        var interfaceName = arguments[i];
        var interfaceFound = false;

        for (var j = 0; j < object.implementsInterfaces.length; j++) {
            if (object.implementsInterfaces[j] == interfaceName) {
                interfaceFound = true;
                break;
            }
        }

        if (!interfaceFound) {
            return false; // An interface was not found.
        }
    }
    return true; // All interfaces were found.
}