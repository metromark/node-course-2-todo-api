// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID("5a587009ebe9e321a8e260e1")
  }, {
    $inc: {
      age: -1
    },
    $set: {
      name: "Romeo",
      location: "Caloocan"
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })


});