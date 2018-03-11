const express = require('express');
const hbs = require('hbs');


const app = express();
var port = 5000;

hbs.registerPartials(__dirname + '/../views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '../public'));

app.get('/', (req, res) => {
    res.render('index.hbs');
});

app.get('/archive', (req, res) => {
    res.render('archive.hbs');
});

app.listen(port, () => {
    console.log(`Running Express Server - port:${port}`);
});
