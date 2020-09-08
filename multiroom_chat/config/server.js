// importar o módulos
var express = require('express')
var expressValidator = require('express-validator')
var consign = require('consign')
var bodyParser = require('body-parser')
//iniciando objeto express
var app = express()
//setando variáveis 'view engine' e 'view'
app.set('view engine', 'ejs')
app.set('views', './app/views')

// configurando middlewares
app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({extended: true})) //-> quando houver um post de um formulário em uma das requisições, poderemos recuperar os dados via json a partir da propriedade body do request
app.use(expressValidator())

//efetua o autoload das rotas, models, controllers no objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

module.exports = app