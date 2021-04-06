const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "no name specified!"]
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const apple = new Fruit({
    name: 'Apple',
    rating: 6,
    review: 'okayish'
});

// apple.save();

const mango = new Fruit({
    name: 'Mango',
    rating: 10,
    review: 'awesome'
});

// mango.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    name: 'kabila',
    age: 30,
    favoriteFruit: mango
});

// person.save();

const kiwi = new Fruit({
    name: 'kiwi',
    rating: 0,
    review: 'bad'
});

const orange = new Fruit({
    name: 'orange',
    rating: 7,
    review: 'great'
});

const banana = new Fruit({
    name: 'banana',
    rating: 7,
    review: 'good'
});

// inserting many things at a time

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("success");
//     }
// });

// searching in database printing out everthing

// Fruit.find(function (err, fruits) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(fruits);
//     }
// });

// searching in database and printing out fruits name only
Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {

        mongoose.connection.close();

        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }
});

Person.find(function (err, people) {
    if (err) {
        console.log(err);
    } else {

        mongoose.connection.close();

        people.forEach(function (person) {
            // console.log(person.name);
            console.log(person.favoriteFruit);
        });
    }
});

// update data
// Fruit.updateOne({ review: 'awesome' }, { rating: 9 }, function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("successfully updated!");
//     }
// });

// delete data
// Fruit.deleteOne({ name: 'Mango' }, function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("successfully deleted!");
//     }
// });

// delete many data

// Person.deleteMany({ name: 'ayon' }, function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("successfully deleted all!");
//     }
// });

// update data of 'ayon' and add a favorite food
// Person.updateOne({ name: 'ayon' }, { favoriteFruit: apple }, function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("successfully updated!");
//     }
// });