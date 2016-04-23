// Connection.js
function ConnectionFactory() {
	var connection;

	this.createConnection = function(connectionType) {
		if ( connectionType==='oracle' ) {
			connection = new OracleConnection();
		}	
		else if ( connectionType==='mssql' ) {
			connection = new MssqlConnection();
		}	
		else if ( connectionType==='mysql' ) {
			connection = new MysqlConnection();
		}

		return connection;
	}

}