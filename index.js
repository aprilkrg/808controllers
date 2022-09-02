const express = require("express")
const ejsExpressLayouts = require("express-ejs-layouts")
const app = express()

const PORT = 3000

app.set("view engine", "ejs")
app.use(ejsExpressLayouts)
// ROUTER MIDDLEWARE
app.use("/loveit", require("./controllers/loveit"))
app.use("/leaveit", require("./controllers/leaveit"))

// ROUTES
app.get("/", (req,res) => {
    res.render("home")
})

// route is a url pattern, something you can type in a browser and see a page
// controller organizes similarly named routes; groups similar routes
// `Router` is a method express provides to us to create controllers


app.listen(PORT, ()=>{
    console.log(`Smooth sounds of jazz on port ${PORT}`)
})