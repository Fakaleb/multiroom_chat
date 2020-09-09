// importando configurações do server
var app = require('./config/server')

// parametrizar a porta de escuta
var server = app.listen(80, function(){
    console.log('ServerOn')
})

var io = require('socket.io').listen(server)

io.on('connection', function(socket){
    console.log('conectado')

    socket.on('disconnect', function(){
        console.log('desconectado')
    })
})