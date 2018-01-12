// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');


  //query data
    // db.collection('Todos').find({
    //   _id: new ObjectID('5a586d5eebe9e321a8e260e0')
    // }).toArray().then((docs) => {
    //   console.log('Todos')
    //   console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //   console.log('Unable to fetch todos', err)
    // })
    
    
    //select all users with name..
    db.collection('Users').find({name: 'Mark'}).toArray().then((docs) => {
      console.log(`Users: `)
      console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
      console.log('Unable to fetch todos', err)
    })
    
    // //select all count
    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count: ${count}`)
    // }, (err) => {
    //   console.log('Unable to fetch todos', err)
    // })

  

  // db.close();
});
