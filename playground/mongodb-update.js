// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
	} else {

	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5875f7a7b7a32c3beb730d26')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	// Challenge
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('586fd52f389fac03eeb309b9')
		}, {
			$set: {
				name: 'Ben',
			}, 
			$inc: {
					age: 1
			}
		}, {
			returnOriginal: false
		}).then((result) => {
			console.log(result);
		});

	// db.close();
});