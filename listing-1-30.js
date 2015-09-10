// module pattern
var Module = (function () {
	var _privateVariable = "this is private",
	_otherPrivateVariable = "so is this",
	public = {};

	function privateMethod() {
		alert("This method is private as well")
	}

	public.publicProperty = "This is a public property";
	public.publicMethod = function() {
		alert("This is a public method");
	}
	return public;
})()

// extending Module
var Module = (function(oldModule){
	oldModule.newMethod = function() {
		alert("this is a new method");
	}
	return oldModule;
})(Module)

// submodule
Module.sub = (function(){
	var _privateSubVariable = "This is a private variable in the submodule";
	public = {};
	public.publicSubVariable = "This is a public variable in the submodule";
	return public;	
})();


alert(Module._privateVariable);
// Module.privateMethod() // will throw an error
alert(Module.publicProperty);
Module.publicMethod();
Module.newMethod();
alert(Module.sub.publicSubVariable);
