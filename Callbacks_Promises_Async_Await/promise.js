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

// CALLBACK STYLE

// function createPost(post, cb) {
// 	setTimeout(()=>{
// 		posts.push(post);
// 		cb();
// 	}, 2000);
// }

// createPost({title: 'Post Three', body: 'This is  post three'},
// 		getPosts) ;



// PROMISE STYLE
// createPost({title: 'Post Three', body: 'This is  post three'})
// 	.then(getPosts)
// 	.catch((error) => {
// 		console.log(error);
// 	})



// USING PROMISE ALL
// const promise1 = Promise.resolve('Hellord JS');

// const promise2 = 99;

// const promise3 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 3000, 'Goodbye');
// });

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//  .then( result => result.json());


//  Promise.all([promise1, promise2, promise3, promise4])
//  	.then( res => console.log(res));


async function fetchUsers() {

	const res = await fetch('https://jsonplaceholder.typicode.com/users');

	const data = await res.json();

	console.log(data);
} 

fetchUsers();








