const express = require('express')
// const path = require('path')


// const db = require('./database')
const routes = require('./routes/routes')

const app = express()

// Conexão com banco de dados 
// db.connect()

// Habilitando servidor para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

// Definindo as rotas 
app. use('/api', routes)

// Executando servidor 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))