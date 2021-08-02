const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/greet', (req, res) => {
    console.log(req.cookieParser);
    res.send('Hey There');
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'henerintobne')
    res.send('Cookies Send');
})

app.listen(3000, () => {
    console.log('Serving on Port 3000');
})
