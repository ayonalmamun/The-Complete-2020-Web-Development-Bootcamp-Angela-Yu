const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const mongoose = require('mongoose');
const e = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/wikiDB', { useNewUrlParser: true, useUnifiedTopology: true });

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

app.route('/articles')
    .get((req, res) => {
        Article.find({}, function (err, foundArticles) {
            if (err) {
                res.send(err);
            } else {
                res.send(foundArticles);
            }
        });
    })
    .post((req, res) => {

        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });

        newArticle.save((err) => {
            if (!err) {
                res.send("Added!");
            } else {
                res.send(err);
            }
        });
    })
    .delete((req, res) => {
        Article.deleteMany(function (err) {
            if (!err) {
                res.send("Deleted All!");
            } else {
                res.send(err);
            }
        })
    });

app.route("/articles/:articleTitle")
    .get((req, res) => {

        Article.findOne({ title: req.params.articleTitle }, (err, foundArticle) => {
            if (foundArticle) {
                res.send(foundArticle);
            } else {
                res.send("Not found!");
            }
        });
    })

    .put((req, res) => {
        Article.updateOne(
            { title: req.params.articleTitle },
            { title: req.body.title, content: req.body.content },
            (err) => {
                if (!err) {
                    res.send("Update success!");
                } else {
                    res.send(err);
                }
            }
        );
    })

    .patch((req, res) => {
        Article.updateOne(
            { title: req.params.articleTitle },
            { $set: req.body },
            (err) => {
                if (!err) {
                    res.send("update successful");
                } else {
                    res.send(err);
                }
            });
    })

    .delete((req, res) => {
        Article.deleteOne(
            { title: req.params.articleTitle },
            (err) => {
                if (!err) {
                    res.send("delete done");
                } else {
                    res.send(err);
                }
            }
        );

    });

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});