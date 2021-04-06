const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// connection URL
const url = 'mongodb://localhost:27017';

// database Name
const dbName = 'fruitsDB';

// create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// use connect method to connect to the server

client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully");

    const db = client.db(dbName);

    // for inserting fruits

    // insertDocuments(db, function () {
    //     client.close();
    // });

    // for searching fruits

    findDocuments(db, function () {
        client.close();
    });
});

const insertDocuments = function (db, callback) {
    // get the documents collection
    const collection = db.collection('fruits');
    //insert some documents
    collection.insertMany([
        {
            name: "apple",
            score: 7
        },
        {
            name: "orange",
            score: 8
        }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(2, result.result.n);
        assert.equal(2, result.ops.length);
        console.log("Inserted 2 fruits into the collection");
        callback(result);
    });
};

const findDocuments = function (db, callback) {
    // get the documents collection
    const collection = db.collection('fruits');
    // find some documents
    collection.find({}).toArray(function (err, fruits) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
};

