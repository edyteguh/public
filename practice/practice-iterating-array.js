// practice iterating array

// normal way omitted, it's obvious for java/c# programmer

var myColors = ["red","orange","yellow","green","blue","indigo","violet"];

for ( var i=0, color; color = myColors[i]; i++) {
	//alert(color);
}

// another way with forEach , it's for new javascript only ,v5 maybe?
myColors.forEach(function(color) {
	//alert(color);
});

var myModifiedColors = ["red","orange","green","green","blue","indigo","violet"];

// modify an array during iteration
for ( var i=0; i<myModifiedColors.length; i++ ) {
	if (myModifiedColors[i]==="green") {
		myModifiedColors.splice(i,1);
	}
}

// in above code, the second green element is missed

// another way with forEach , it's for new javascript only ,v5 maybe?
myModifiedColors.forEach(function(color) {
	alert(color);
});

myModifiedColors = ["red","orange","green","green","blue","indigo","violet"];

// here is the solution for above problem, by iterate array in reverse
// modify an array during iteration
for ( var i=myModifiedColors.length-1; i>= 0; i-- ) {
	if (myModifiedColors[i]==="green") {
		myModifiedColors.splice(i,1);
	}
}

// another way with forEach , it's for new javascript only ,v5 maybe?
myModifiedColors.forEach(function(color) {
	alert(color);
});
