var fs = require('fs');

var http = require('http');

var server = http.createServer(function(req, res) {
    console.log("URL страницы: " + req.url);
    if (req.url === '/json' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        fs.createReadStream(__dirname + '/twitter_posts.json').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log("Мы отслеживаем порт 3000");
