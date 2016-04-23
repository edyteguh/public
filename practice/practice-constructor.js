constructors
function createCircle() {
	this.radius = 10;
	var _pi = 3.141;
	this.diameter = function() {
		var result= 2 * this.radius;
		return result;
	}

	this.circumference = function() {
		var result= 2 * _pi * this.radius;
		return result;
	}

	this.area = function() {
		var result= _pi * this.radius * this.radius;
		return result;
	}
}

// create object with literal notation
function createCircleWithLiteralNotation() {
	var myCircle = {
		radius : 10,
		_pi : 3.141,
		diameter : function() {
			var result= 2 * this.radius;
			return result;
		},
		circumference : function() {
			var result= 2 * this._pi * this.radius;
			return result;
		},
		area : function() {
			var result= this._pi * this.radius * this.radius;
			return result;
		}
	}
	alert(myCircle.diameter());
	alert(myCircle.circumference());
	alert(myCircle.area());
}



var myCircle = new createCircle();
alert(myCircle.diameter());
alert(myCircle.circumference());
alert(myCircle.area());

createCircleWithLiteralNotation();

// create object with Object.create()
var myCircleLiteral = {
	radius : 10,
	_pi : 3.141,
	diameter : function() {
		var result= 2 * this.radius;
		return result;
	},
	circumference : function() {
		var result= 2 * this._pi * this.radius;
		return result;
	},
	area : function() {
		var result= this._pi * this.radius * this.radius;
		return result;
	}
}
var myChildCircle = Object.create(myCircleLiteral);
alert(myChildCircle.diameter());
alert(myChildCircle.circumference());
alert(myChildCircle.area());


// a common convention for constructors is to capitalize their first letter
function Kitty() {
	this.soft = true;
	this.temperature = "warm";
	this.vocalize = function() {
		alert('Purr,purr,purr');
	}
}
var myKitty = new Kitty;
alert(myKitty.soft);
alert(myKitty.temperature);
myKitty.vocalize();
