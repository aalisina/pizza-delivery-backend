const express = require('express');
const db = require('./dbConnect');

const Pizza = require('./models/pizzaModel');
const app = express();

app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Server is working.');
});

app.get('/pizzas', async (req, res)=> {
    const pizzas = await Pizza.find({}, (err, docs)=> {
        if (err) {
            console.log(err);
        } else {
            res.send(docs)
        }
    });
    
});

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log('Server listening on port: ' + PORT));
