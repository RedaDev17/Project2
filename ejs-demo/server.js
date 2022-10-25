var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var listInfo = [{title: "John", description: 20}, {title: "Mary", description: 30}]

app.get('/blogs', (req, res) => {
    res.render('pages/index', {
        listInfo: listInfo,
    });
})

app.post('/postblog' , (req, res) => {
    const title = req.query.title;
    const description = req.query.description;

    listInfo.push({title: title, description: description})
    // res.render('pages/BlogCreated', {
    //     listInfo: listInfo,
    // });
    res.send(title + description)
})

app.post('/editblog' , (req, res) => {
    const title = req.query.title;
    const description = req.query.description;

    for (var i = 0; i < listInfo.length; i++) {
        if (listInfo[i].title == title) {
            listInfo[i].description = description
        }
    }
    res.send(title + description)
})

app.listen(8080);
console.log('Server is listening on port 8080');