// practice immediately called function
function wazzup(myName) {
	var what = "wazzup " + myName;
	(function doWazzup() {
		alert(what);
	})()
}

wazzup("edy");