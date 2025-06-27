const express = require('express');
const app = express();
require('dotenv').config();

app.use('/public', express.static(__dirname + '/public'));

console.log("Hello World");


// app.get('/', (req,res) => {
//     console.log("Hello Express");
//     res.send("Hello Express");
// });

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({time: req.time});
});

app.get('/:word/echo', (req, res) => {
    const { word } = req.params;
    res.json({
        echo: word
    })
})


absolutePathhtml = __dirname + '/views/index.html';


app.get('/', (req, res) => {
    res.sendFile(absolutePathhtml);
})

app.get('/json', (req, res) => {
    let message = "Hello json";
    message = process.env.MESSAGE_STYLE === 'uppercase' ?  message.toUpperCase() : message;
    res.json({message: `${message}`})
});


























 module.exports = app;
