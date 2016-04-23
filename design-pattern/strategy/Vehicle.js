// Strategy pattern

function Vehicle(name,goFunction) {
	this.name = name;
	this.go = goFunction;
}

var goByDriving = new GoByDriving();
var car = new Vehicle("car",goByDriving.go);
alert(car.go());

var goByFlying = new GoByFlying();
var plane = new Vehicle("plane",goByFlying.go);
alert(plane.go());

var goByFlyingfast = new GoByFlyingFast();
var jetPlane = new Vehicle("jet plane",goByFlyingfast.go);
alert(jetPlane.go());