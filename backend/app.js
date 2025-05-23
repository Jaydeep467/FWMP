const express = require('express')
const cors = require('cors');

const app = express()
const { db } = require('./db/db');
const {readdirSync} = require('fs')

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

/*app.get('/', (req, res)=> {
    res.send('Hello World')
})*/0

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listeinng to port:', PORT);
    })
}

server()