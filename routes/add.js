var data = require("../data.json");

exports.addFriend = function(request, response) { 	let mondoJSON = {
		name: request.query.name,
		description: request.query.description,
		imageURL: 'http://lorempixel.com/500/500/people'
	}

	console.log('NAME: ' + mondoJSON.name + ', and desc: ' + mondoJSON.description);

	data.friends.push(mondoJSON);

	response.render('index', data);
 }