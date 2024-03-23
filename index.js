// Importing the necessary modules: fs for file system operations, http for creating HTTP server, and path for handling file paths.
const fs = require('fs');
const http = require('http');
const path = require('path');

/*
// Reading the content of the file './txt/input.txt' synchronously using 'readFileSync' function from 'fs' module.
// 'utf-8' specifies the encoding of the file, which is necessary to correctly interpret special characters.
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// Printing the content of the file to the console.
console.log(textIn);

// Creating a new string variable 'textout' containing the text "Hello ".
const textout = `Hello `;

// Writing the content of 'textout' variable to a new file './txt/output.txt' synchronously using 'writeFileSync' function from 'fs' module.
fs.writeFileSync('./txt/output.txt', textout);

// Printing a message to the console indicating that the file has been written successfully.
console.log("File written");

// Reading the content of the file './txt/start.txt' asynchronously using 'readFile' function from 'fs' module.
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
    // Handling errors if any.
    if (err) {
        console.error(err);
        return;
    }
    // Logging the data read from the file.
    console.log(data);
});
*/

// Creating an HTTP server using the 'createServer' method from the 'http' module.
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8')
const tempoverview = fs.readFileSync(`${__dirname}/templates/template-.html`,'utf-8')

const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8')




const dataObj = JSON.parse(data);
const server = http.createServer((req, res) => {
    // Extracting the requested URL path from the request object.
    const pathName = req.url;

    // Handling different routes based on the requested URL path.
    // overviewpage
    if (pathName === '/' || pathName === '/overview') {
        // Sending response for the '/' and '/overview' routes.
        res.writeHead(200,{'Content-type':'text/html'})
        res.end(tempoverview);
    } else if (pathName === '/api') {
    
            
            res.writeHead(200,{'content-type': 'application/json'});
            res.end(data)
        
       
    } else {
        // Sending response for any other route.
        res.write('Page not Found');
        res.end();
    }
    console.log("Hello This is from The Server!");
});

// Making the server listen on port 8000 and localhost (127.0.0.1).
server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to requests on port 8000");
});
