const fs = require('fs');
const http = require('http');
const path = require('path');

const data1 = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data1);
    } else {
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end("<h2>This is Error Page</h2>");
    }
});

server.listen(9000, '127.0.0.1', () => {
    console.log("Listening to requests on port 9000");
});
