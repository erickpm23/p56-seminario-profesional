const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')

const config = require('./config')
const db = require('./db')
const router = require('./network/routes')
const { host } = require('./config')

db( config.dbUrl )

var app = express()
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( {extended:false} ) )
router( app )

app.use( config.publicRoute, express.static('public') )

app.listen( config.port )
console.log( `La aplicacion esta escuchando en ${config.host}:${config.port} ${config.publicRoute}` )