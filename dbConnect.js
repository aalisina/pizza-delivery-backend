const mongoose = require('mongoose');

const MONGO_URI ='mongodb://localhost:27017/mern-pizza';

mongoose.connect(MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true});

const db = mongoose.connection;

db.on('connected', ()=> {
    console.log('DB is connected');
});

db.on('error', ()=> {
    console.log('DB connection failed');
})

module.exports = mongoose;