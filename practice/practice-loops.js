
var myObject = {
	prop1 : "one",
	prop2 : "two",
	prop3 : "three",
	prop4 : "four"
}

var strAlert = "";
for ( var prop in myObject ) {
	strAlert += prop + " : " + myObject[prop] + "\n";
}
alert(strAlert);