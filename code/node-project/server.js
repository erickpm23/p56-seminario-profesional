const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')

const router = express.Router()

var app = express()
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( {extended:false} ) )
app.use( router )

router.get('/carrera', function(req, res) {
    response.success( req, res, 'Lista de Carreras de la UPS.', 200  )
})
router.post('/carrera', function(req,res){
    if(req.query.error == 'ok'){
        response.error( req, res, 'Error al ingresar a la Carrera.', 500 )
    } else {
        response.error( req, res, 'Ingreso de Carrera exitoso.', 201 )
    }
})

app.use( '/', express.static('public') )

app.listen( 5000 )
console.log( 'La aplicacion esta escuchando en http://localhost:5000' )