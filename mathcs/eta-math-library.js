/*
function gcd(a,b)
returns greatest common divisor between two integers
using euclidean algorithm, recursive
*/
function gcd(a,b) {
	var result;
	if (b===0) {
		result = a;
	}
	else {
		result = gcd(b, (a%b));
	}

	return result;
}

var result = gcd(246,72);
alert(result);
