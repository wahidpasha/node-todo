const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
 if(err){
     return console.log('unable to connect to mongodb');

 }
 console.log('connect to mongodb');
/*
db.collection('Todos').insertOne({
    text : 'something to do',
    completed : false 
},(err,result)=>{
if(err) {
    return console.log('unable to insert todo',err);
}

console.log(JSON.stringify(result.ops,undefined,2));
});
*/
db.collection('Users').insertOne({
    name: 'Abdul',
    age : 23,
    location : 'blr'
} ,(err,result)=>{
    if(err){console.log('error');}
    console.log(JSON.stringify(result.ops,undefined,2));
});

 db.close();
});