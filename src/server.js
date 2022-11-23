const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

// Conexão com banco de dados 
db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.app.com.br',
]

// Checando se a origem tem permisão

// Habilitando CORS
app.use(cors({
    origin: (origin, callback) => {
        if(allowedOrigins.includes(origin)) {
            callback(null, true)
        } else if(!origin) {
            callback(null, true)
        } else {
            callback(new Error())
        } 
    }
}))

// Habilitando server para receber dados json
app.use(express.json())

// Definindo as rotas 
app. use('/api', routes)

// Executando servidor 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))