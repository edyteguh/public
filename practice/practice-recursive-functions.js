//practice recursive functions
function factorial(number) {
	if ( number<=1 ) {
		return 1;
	}
	else {
		return number * factorial(number-1);
	}
}
//alert(factorial(5));

/*
PROB: 
3 peg, 3 >> 1 use 2	

step 1 :
2 peg, 3 >> 2 use 1
p1: t3 >> t1
p2: t3 >> t2
p1: t1 >> t2

step 2 :
p3: t3 >> t1

step 3:
2 peg, 2 >> 1 use 3
p1: t2 >> t3
p2: t2 >> t1
p1: t3 >> t1
*/

// function towerOfHanoi
var instructions = "";

function towerOfHanoi(numberOfPegs,numberOfPole,sourcePole,destinationPole) {

	//instructions += "\nMoving " +numberOfPegs+ " peg from " + sourcePole + " >> " + destinationPole;

	var temporaryPole = 0;
	// determine temporary pegs
	for ( var i=numberOfPole; i>0; i--) {
		//instructions += "\nindex:" + i;
		if ( i!=sourcePole && i!=destinationPole ) {
			temporaryPole = i;
			//instructions +="\ntemporary:" + i;
		}
	}

	// base
	if ( numberOfPegs==1 )
	{
		instructions += "\n- Move 1 peg from " + sourcePole + " >> " + destinationPole;
	}
	else {
		towerOfHanoi(numberOfPegs-1,numberOfPole,sourcePole,temporaryPole);
		towerOfHanoi(1,numberOfPole,sourcePole,destinationPole);
		towerOfHanoi(numberOfPegs-1,numberOfPole,temporaryPole,destinationPole);
		instructions+="\n-------------------"
	}

	return instructions;
}

towerOfHanoi(4,3,4,1);
alert(instructions);
