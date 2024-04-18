require('dotenv').config()
const express = require('express');
const cors = require('cors');
const {add} = require("./arithmetica");
const app = express();
app.use(cors());


const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World! - last updated 3/5/24');
})
//takes two numbers, returns the sum
app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n)
    let m = Number(req.params.m)
    let sum = add(n,m);
    res.json(sum);
})
app.get('/sub/:n/:m', (req,res)=>{
    res.json(Number(req.params.n)-Number(req.params.m));
})
app.get('/mul/:n/:m', (req,res)=>{
    res.json(Number(req.params.n)*Number(req.params.m));
})
app.get('/div/:n/:m', (req,res)=>{
    res.json(Number(req.params.n)/Number(req.params.m));
})

app.listen(port);
