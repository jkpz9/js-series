// NESTED QUERY
$.ajax({
	url: 'a.json',
	 success: function(response) {
	 	$.ajax({
	 		url: 'b,json' + response.a,
	 		success: function(result) {
	 			$('#div').html(result);
	 		}
	 	});
	 }
});


var p1 = new Promise((resolve, reject) => {
	return resolve($.ajax('b.json'));
});

p1.then((r) => {
	return new Promise()
})
.then((result) => {
	$('#div').html(result);
})