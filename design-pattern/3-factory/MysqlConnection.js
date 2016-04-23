// MysqlConnection.js
/*
	interface iConnection {
		function description();
	}
*/

function MysqlConnection() {
	this.description = function() {
		return "Connected to MySql"
	}
}