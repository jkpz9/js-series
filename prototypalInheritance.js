let car = function(model) {
	this.model = model;
};

car.prototype.getModel = function() {
	return  this.model;
}


let nissan =  new car('nissan');

 console.log(nissan.getModel());