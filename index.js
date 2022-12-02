const { render } = require('ejs')
const { req, res } = require('express')
const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.json())

const port = process.env.PORT

//endpoints

app.get('/', (req, res) => {
    res.render('index')
})
app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'ejs')


app.listen(port, () => {
    console.log(`Escuchando peticiones en ${port}`)
})