// practice module pattern
var Lingkaran = (function() {
	public = {};

	public.constantPi = 3.141;
	public.radius = 5;

	return public;
})()

var Lingkaran = (function(oldLingkaran){
	oldLingkaran.diameter = function() {
		return 2 * oldLingkaran.radius;
	}()

	return oldLingkaran;
})(Lingkaran)

var Lingkaran = (function(oldLingkaran) {
		oldLingkaran.keliling = function() {
			return 2 * oldLingkaran.constantPi * oldLingkaran.radius;
		}()

		return oldLingkaran;
})(Lingkaran)

//Lingkaran.radius = 10;
alert("radius = " + Lingkaran.radius);
alert("diameter = " + Lingkaran.diameter);
alert("keliling = " + Lingkaran.keliling);
