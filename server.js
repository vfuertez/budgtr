require("dotenv").config()
const express = require('express')
const app = express()
const budget = require('./models/budget')
const methodOverride = require("method-override")

//const PORT = process.env.PORT

// static file
app.use(express.urlencoded({extended: true}))
app.use("/public", express.static("public"))
app.use(methodOverride("_method"))



// Index route
app.get('/budgets', (request, response) => {
response.render("index.ejs",{ budget })
});

// POst Route
app.post('/budgets', (request, response) => {
    budget.push(request.body)
    response.redirect("/budgets")
    
})

// New Route
app.get('/budgets/new', (request, response) => {
response.render("new.ejs")
});



// Show Route
app.get('/budgets/:index', (request, response) => {
response.render("show.ejs",{
    theBudget: budget[request.params.index],
    index: request.params.index
} )
});


app.listen(process.env.PORT, (request, response) => {
    console.log(`Listening to port ${process.env.PORT}`)
});