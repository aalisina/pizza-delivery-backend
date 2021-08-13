const express = require('express');
const db = require('./dbConnect');

const app = express();

app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Server is working.');
});

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log('Server listening on port: ' + PORT));
