const express = require("express")
const router = express.Router()

// localhost:3000/loveit/animals
// url  = localhost:3000/loveit/animals
router.get('/animals', (req, res) => {
    res.render('loveit/animals', {animals: ['sand crab', 'corny joke dog']})
});

// url  = localhost:3000/loveit/foods
router.get('/foods', (req, res) => {
    res.render('loveit/foods', {foods: ["posole", "cookies", "marshmallows"]})
});

module.exports = router