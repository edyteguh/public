// Monitor.js
function Monitor(computer) {
	this.description = function() {
		return computer.description() + " and a monitor";
	}
}