require("dotenv").config()
const express = require('express')
const app = express()
const budget = require('./models/budget')
// const PORT = process.env.PORT

// static file
app.use("/public", express.static("public"))

app.get('/budgets', (request, response) => {
response.send('hello world')
});


app.get('/budgets/:index', (request, response) => {
response.render("index.ejs",{
    theBudget: budget
} )
});

app.get('/budgets/new', (request, response) => {

});

app.post('/budgets', (request, response) => {

});


app.listen(process.env.PORT, (request, response) => {
    console.log(`Listening to port ${process.env.PORT}`)
});