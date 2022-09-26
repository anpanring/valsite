const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
    res.render('home');
    // console.log('hello!');
})

app.listen(8080, () => console.log('listening at port 8080...'));