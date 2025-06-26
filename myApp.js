const express = require('express');
const app = express();
require('dotenv').config();

app.use('/public', express.static(__dirname + '/public'));

console.log("Hello World");


// app.get('/', (req,res) => {
//     console.log("Hello Express");
//     res.send("Hello Express");
// });


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
