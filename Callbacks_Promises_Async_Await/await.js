const posts = [
{ title: 'Post One', body: 'This is post one' },
{ title: 'Post Two', body: 'This is post two' },
];

function getPosts() {
	setTimeout(() => {
		let output = '';
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = '';
		document.body.innerHTML = output;
	},1000);
}

function createPost(post, cb) {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
		posts.push(post);
		const error = [];
		if (error.length === 0) {
			//resolve(true);
			resolve();
		} else {
			reject('Some Terrible thing happened :((');
		}
	}, 2000);
	});
}

createPost({title: 'Post Three', body: 'This is  post three'})
	.then(getPosts)
	.catch((error) => {
		console.log(error);
	})




