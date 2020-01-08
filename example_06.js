let amount = 3

function foo() {
	let amount = 1
	console.log( amount )
	
	for( let i=0; i< amount; i++ ) {
		let amount = 2
		console.log( amount )
	}

	console.log( amount )
}

foo()

console.log( amount )