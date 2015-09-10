// practice module pattern
var Lingkaran = (function() {
	var _pi = 3.141,
	public = {};

	public.radius = 5;

	return public;
})()

var Lingkaran = (function(oldLingkaran){

	oldLingkaran.diameter = function() {
		return 2 * oldLingkaran.radius;
	}()

	return oldLingkaran;
})(Lingkaran)

Lingkaran.radius = 10;
alert(Lingkaran.radius);
alert(Lingkaran.diameter);