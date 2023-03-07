const http = require('node:http');

const mime = require("mime");
mime.getType("txt");
mime.getExtension("text/plain");

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, res) => {
    // console.log(request.method);
    // console.log(request.url);
    // console.log(request.headers)
    //request.
    let mimeType = mime.getType("html");
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end("<html><head><title>Test nodeServer</title><h1>Writing some text to see if it works</h1></head></html>")
});

server.listen(8000);//tells the server which port to listen on

console.log("server started on port 8000, press ctrl+c to terminate");