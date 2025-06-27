const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}))
console.log("Hello World");


// app.get('/', (req,res) => {
//     console.log("Hello Express");
//     res.send("Hello Express");
// });

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

app.get('/api/:date', (req, res) => {
    const { date } = req.params;

     if(!isNaN(date)){
        const unixDate = new Date(parseInt(date));
        res.json({unix: new Date(unixDate).getTime(), utc: new Date(unixDate).toUTCString()});
    } else {
        const dateObj = new Date(date);
        if(dateObj.toString() === 'Invalid Date'){
            res.json({error: "Invalid Date"});
        } else {
            res.json({unix: dateObj.getTime(), utc: dateObj.toUTCString()});
        }
    }
})

app.route('/name').post((req, res) => {
    const {first, last} = req.body;
    res.json({name: `${first} ${last}`});
}).get((req, res) => {
    const {first, last} = req.query;
    // console.log(`First Name: ${first}, Last Name: ${last}`)
    res.json({name: `${first} ${last}`});
});

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
