// TestFactory.js
// Test Factory design pattern 

var connectionFactory = new ConnectionFactory();
var connection = connectionFactory.createConnection('oracle');
alert(connection.description());

