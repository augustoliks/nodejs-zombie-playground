const http = require("http");

const hostname = "127.0.0.1";
const port = 6661;


const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end("Carlos Neto");
})


server.listen(port, hostname, () => {
    console.log("Servidor operando em: http://${hostname}:${port}/")
})
