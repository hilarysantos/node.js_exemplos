// Aula 01

//Primeiro exemplo: Imprimindo texto no terminal (PowerShell)
console.log("Olá, Toti!")

//Segundo Exemplo: Primeira criação de servidor
const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('Olá, Toti!');
});
server.listen(3000);
console.log('Servidor funcionando com sucesso! Acesse: localhost:3000');

//Terceiro Exemplo: Apresentando o trabalho com URLs
const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    if(req.url == "/"){
        res.write("<h1> Olá, Toti! </h1>");
    }else if(req.url == "/outra/"){
        res.write("<h1> Outra Página </h1>");
    }else{
        res.writeHead(404, {'Content-type': 'text/html; charset=utf-8'});
        res.write("<h1> Página não encontrada! </h1>");
    }
    res.end();
});
server.listen(3000);
console.log('Servidor funcionando. Acesse: localhost:3000');
