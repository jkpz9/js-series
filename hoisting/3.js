const profile = {
	firstname: '',
	lastname: '',
	setName: function(name) {
		let splitName = (n) => {
			let nameArr = n.split(' ');
			firstname = nameArr[0];
			lastname = nameArr[1];
		}
		splitName(name);
	}
}

profile.setName('hoang pham');
 console.log(profile.firstname);