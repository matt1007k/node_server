require('./config/config')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', (req, res) => {
    res.json({ message: 'Hola usuario' })
})

app.post('/usuario', (req, res) => {
    let body = req.body

    res.json({ persona: body })
})

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id
    res.json({ mensaje: "Editar id: " + id })
})

app.delete('/usuario/:id', (req, res) => {
    let id = req.params.id
    res.json({ mensaje: "Eliminar id: " + id })
})


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`);
})