// Aula 01
console.log("Olá, Toti!")

const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('Olá, Toti!');
});
server.listen(3000);
console.log('Servidor funcionando com sucesso! Acesse: localhost:3000');
