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

app.listen(PORT, ()=>{
    console.log(`Smooth sounds of jazz on port ${PORT}`)
})