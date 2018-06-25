console.log(funcD());
console.log(funcE()); // undefined

function funcD() {
	console.log('This is a kind of function Declaration');
}
let funcE = function() {
	console.log('This is a kind of function Expression');
} 
