const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    const day = date.getDate();
    res.render('index', {listTitle: day, newListItems: items});
});

app.post('/', (req,res) => {
    const item = req.body.newItem;
    if(req.body.list === 'Work List') {
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
});

app.get('/work', (req, res) => {
    res.render('index', {listTitle: 'Work List', newListItems: workItems});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});