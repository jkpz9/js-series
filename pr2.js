let promiseToCleanTheRoom = new Promise((resolve, reject) => {

	let isClean = true;

	if (isClean) resolve('Clean');
	else reject('Not Clean');
});


promiseToCleanTheRoom.then((fronmResolve) => {
	console.log('The room is ' + fronmResolve);
})
.catch((fromReject) => {
	console.log('The room is ' + fromReject);
});