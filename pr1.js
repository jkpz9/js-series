let aPromise = new Promise((resolve, reject) => {
	// resolve("sucess");
	// reject('cant not connect to SERVER');
	setTimeout(() => {
		reject('cant not connect to SERVER');
	}, 3000);
});

aPromise.then(msg => console.log(msg), err => console.log(err));