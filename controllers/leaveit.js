const express = require("express")
const router = express.Router()

// url = localhost:3000/leaveit/movies
router.get('/movies', (req, res) => {
    res.render('leaveit/movies', {movies: ["Morbius", "Cullpepper Cattle Company", "The Last Jedi"]})
});
router.get('/products', (req, res) => {
    res.render('leaveit/products', {products: ["bottled water", "sandals with no back", "small coffee mugs"]})
});


module.exports = router