// immediately invoked function
function greet(myName) {
	var myAlertString = "Hello " + myName;
	(function doAlert() {
		alert(myAlertString);
	})()
}

greet("Kitty");