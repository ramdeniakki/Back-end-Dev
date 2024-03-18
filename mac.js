const http = require('http');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/' || pathName === '/about') {
        res.end('This is About page');
    } else {
        res.end('Page not Found');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log("Server is listening");
});
