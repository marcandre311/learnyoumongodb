
var url = "mongodb://localhost:27017/learnyoumongo";
var mongo = require('mongodb').MongoClient;
var age = process.argv[2];

mongo.connect(url, function(err, db) {
    if (err) throw err;
      var collection = db.collection('parrots');
     var obj = {firstName: process.argv[2], lastName: process.argv[3]};
     
      collection.insert(obj);
        console.log(JSON.stringify(obj));
     db.close();
})
