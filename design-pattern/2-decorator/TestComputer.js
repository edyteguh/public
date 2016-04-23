// TestComputer.js
// Decorator pattern 

var computer  = new Computer();
//alert(computer.description());

var disk = new Disk(computer);
var disk2 = new Disk(disk);
//alert(disk.description());

var monitor = new Monitor(disk2);
alert(monitor.description());