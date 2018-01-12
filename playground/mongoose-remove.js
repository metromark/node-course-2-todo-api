const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result)
// })

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove().then((todo) => {
  console.log(todo)
})

// Todo.findByIdAndRemove('5a594370ebe9e321a8e260ea').then((todo) => {
//   console.log(todo)
// })