// disk.js
function Disk(computer) {
	this.description = function() {
		return computer.description() + " and a disk";
	}
}