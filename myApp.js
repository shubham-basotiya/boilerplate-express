let express = require('express');
let app = express();

console.log("Hello World");


// app.get('/', (req,res) => {
//     console.log("Hello Express");
//     res.send("Hello Express");
// });


absolutePathhtml = __dirname + '/views/index.html';


app.get('/', (req, res) => {
    res.sendFile(absolutePathhtml);
})


























 module.exports = app;
