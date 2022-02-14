const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/cats', (req, res) => {
    res.send('meow')
})

app.get('/dogs', (req,res) => {
    res.send('rufff')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})