var amount = 3

function foo() {
	var amount = 1
	console.log( amount )
	
	for( var i=0; i< amount; i++ ) {
		var amount = 2
		console.log( amount )
	}

	var amount = 5
	console.log( amount )
}

foo()

console.log( amount )