module.exports = function(application){

    application.post('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res)
        
    var connection = application.config.dbConnection()        
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    var id_noticia = req.query

    noticiasModel.getNoticia(id_noticia, function(error, result){
        res.render("noticias/noticia", {noticia : result} )
    }) 
    })

    application.get('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res)
    })
}
