var restify=require('restify'),
    server = restify.createServer();

module.exports={
    _getHelloWorld:function(req, res, next) {
        res.send('Hello World (by Anastasiia Sliusar)');
        next();
    },
    get:function(){
        var self = this;
        server.get('/hello/', this._getHelloWorld);
        server.listen(1905, function() {
            console.log('%s listening at %s', server.name, server.url);
        });
    }

};



