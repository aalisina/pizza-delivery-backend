const express = require('express');
const db = require('./dbConnect');

const Pizza = require('./models/pizzaModel');
const app = express();
const pizzasRoute = require('./routes/pizzasRoute');

app.use('/api/pizzas', pizzasRoute);
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Server is working.');
});

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log('Server listening on port: ' + PORT));
