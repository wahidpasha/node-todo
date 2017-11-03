const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
 if(err){
     return console.log('unable to connect to mongodb');

 }
 console.log('connect to mongodb');
/*
db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
console.log('connect to mongoDB server');
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log('unable to fectch ',err);
});
*/
db.collection('User').find({name:andre}).toArray.then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log('unable to fectch ',err);
});
 db.close();
});