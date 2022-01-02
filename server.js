const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.writeHead(200);
    res.end('hello world');
});

server.listen(3000, () => console.log('Listening on port 3000'));