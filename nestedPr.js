let cleanRoom = () =>  {
	return new Promise((resolve, reject) => {
		resolve('Clean the Room');
	});
}

let removeGarbage = (foreMgs) => {
 	return new Promise((resolve, reject) => {
 		resolve(foreMgs + ' ' + 'Remove the garbage');
 	});
}

let winIcream = (foreMgs) => {
	return new Promise((resolve, reject) => {
		resolve(foreMgs + ' ' +  'Won an Icream');
	});
}

// sequential
// cleanRoom().then((result) => {
// 	return removeGarbage(result);
// })
// .then((result) => {
// 	return winIcream(result);
// })
// .then((result) => {
// 	console.log(result);
// });

// parallel

//Promise.rase
Promise.all([cleanRoom(), removeGarbage(), winIcream()])
 .then(() => {
 	console.log(result + 'all finished');
 });