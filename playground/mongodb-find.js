// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
	} else {

	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('586fd4111a105303e889296f')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Todos').find().count().then((count) => {
		console.log(`Todos count: ${count}`);		
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	db.collection('Users').find({
		name: 'Ben'
	}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));		
	});


	db.close();
});