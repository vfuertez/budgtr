require("dotenv").config()
const express = require('express')
const app = express()
const budget = require('./models/budget')
const methodOverride = require("method-override")
//const PORT = process.env.PORT

// static file
app.use("/public", express.static("public"))
app.use(methodOverride("_method"))



app.get('/budgets', (request, response) => {
response.render("index.ejs",{
    theBudget: budget
})
});


app.get('/budgets/:index', (request, response) => {
response.render("show.ejs",{
    theBudget: budget[request.params.index],
    index: request.params.index
} )
});

app.get('/budgets/new', (request, response) => {
response.render("new.ejs")
});
// when I go to this route I get an error from show.ejs


app.post('/budgets', (request, response) => {

});


app.listen(process.env.PORT, (request, response) => {
    console.log(`Listening to port ${process.env.PORT}`)
});