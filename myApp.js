let express = require('express');
let app = express();

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
    res.json({messsage: "Hello json"})
});


























 module.exports = app;
