// importando configurações do server
var app = require('./config/server')

// parametrizar a porta de escuta
var server = app.listen(80, function(){
    console.log('ServerOn')
})

var io = require('socket.io').listen(server)
app.set('io', io)

io.on('connection', function(socket){
    console.log('conectado')

    socket.on('disconnect', function(){
        console.log('desconectado')
    })

    socket.on('msgParaServidor', function(data){
        socket.emit(
            'msgParaCliente', 
            { apelido: data.apelido, mensagem: data.mensagem}
        );
        
        socket.broadcast.emit(
            'msgParaCliente', 
            { apelido: data.apelido, mensagem: data.mensagem}
        );
   
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
            socket.emit(
                'participantesParaCliente', 
                {apelido: data.apelido}
            );
                
            socket.broadcast.emit(
                'participantesParaCliente', 
                {apelido: data.apelido}
            ); 
        }
        
    })
    
    
        
})