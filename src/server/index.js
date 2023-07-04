const http = require('http');

const server = http.createServer(function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);

    res.end(JSON.stringify({
        message: "Hello World"
    }));
});

server.listen(8080, function(){
    console.log("Listening on port 8080");
});