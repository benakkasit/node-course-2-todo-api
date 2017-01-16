const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id ='587c584877cc97092cec628b1';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo', todo);
// }).catch((e) => console.log(e));

// Challenge
var id = '58760afe957a2c0835fca880';

User.findById(id).then((user) => {
	if (!user) {
		return console.log('Id not found');
	}
	console.log('User', user);
}, (e) => {
	console.log(e);
});