const express = require("express")
const ejsExpressLayouts = require("express-ejs-layouts")
const app = express()

const PORT = 3000

app.set("view engine", "ejs")
app.use(ejsExpressLayouts)

app.use("/loveit", require("./controllers/loveit"))

// ROUTES
app.get("/", (req,res) => {
    res.render("home")
})


app.get('/leaveit/movies', (req, res) => {
    res.render('movies', {movies: ["Morbius", "Cullpepper Cattle Company", "The Last Jedi"]})
});
app.get('/leaveit/products', (req, res) => {
    res.render('products', {products: ["bottled water", "sandals with no back", "small coffee mugs"]})
});

app.listen(PORT, ()=>{
    console.log(`Smooth sounds of jazz on port ${PORT}`)
})