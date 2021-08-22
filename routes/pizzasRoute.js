const express = require('express');
const Pizza = require('../models/pizzaModel');
const router = express.Router();

router.get('/getpizzas', async(req, res)=> {
    try {
        const pizzas = await Pizza.find({});
        res.status(200).json(pizzas)
        
    } catch (error) {
        res.status(400).json({message: error})
    }
});

module.exports = router;