const express = require("express")
const ejsExpressLayouts = require("express-ejs-layouts")
const app = express()

const PORT = 3000

app.set("view engine", "ejs")
app.use(ejsExpressLayouts)

// ROUTES
app.get("/", (req,res) => {
    res.render("home")
})

// HTTP method = GET
// URL pattern = "/animals"
// localhost:3000/animals
app.get('/animals', (req, res) => {
    res.render('animals', {animals: ['sand crab', 'corny joke dog']})
});
app.get('/foods', (req, res) => {
    res.render('foods', {foods: ["posole", "cookies", "marshmallows"]})
});
app.get('/movies', (req, res) => {
    res.render('movies', {movies: ["Morbius", "Cullpepper Cattle Company", "The Last Jedi"]})
});
app.get('/products', (req, res) => {
    res.render('products', {products: ["bottled water", "sandals with no back", "small coffee mugs"]})
});

app.listen(PORT, ()=>{
    console.log(`Smooth sounds of jazz on port ${PORT}`)
})