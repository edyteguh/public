// MssqlConnection.js
/*
	interface iConnection {
		function description();
	}
*/

function MssqlConnection() {
	this.description = function() {
		return "Connected to MS Sql"
	}
}