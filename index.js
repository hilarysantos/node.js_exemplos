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

//Aula 02: Trabalhando com métodos HTTP e rotas
const http = require('http');

const server = http.createServer(function (req, res) {
    if(req.method === 'GET'){
        if (req.url === '/'){
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
            res.end('<html><body><h1>Respondendo uma requisição GET!</h1></body></html>')
        }else if(req.url === '/fotos'){
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
            res.end('<html><body><h1>Cheguei na rota de fotos!</h1></body></html>')
        }
        else if(req.url === '/gatos'){
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
            res.end('<html><body><h1>Cheguei na rota de fotos de gatos!</h1></body></html>')
        }
        else {
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
            res.end('<html><body><h1>Não encontrei uma rota!</h1></body></html>')
        }
    }else if(req.method === 'POST'){
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
        res.end('Repondendo uma requisição POST!')
    }else if(req.method === 'PUT'){
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
        res.end('Repondendo uma requisição PUT!')
    }else if(req.method === 'DELETE'){
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
        res.end('Repondendo uma requisição DELETE!')
    }else{
        res.writeHead(400, {'Content-type': 'text/html; charset=utf-8'})
        res.end('Não sei tratar esse método HTTP: ${re.method}')
    }
})
server.listen(3000)
console.log('Servidor funcionando. Acesse: localhost:3000');

// Cógido simplificado método GET e rotas
const http = require('http');

const server = http.createServer(function(req, res){
    if(req.method === 'GET'){
        if(req.url === '/'){
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
            res.end('<h1> Página Inicial </h1>')
        }else if(req.url === '/produtos'){
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
            res.end('<h1> Produtos </h1>')
        }else if(req.url === '/contato'){
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
            res.end('<h1> Contato </h1>')
        }else if(req.url === '/login'){
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
            res.end('<h1> Login </h1>')
        }else{
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
            res.end('<h1> Rota não encontrada</h1>')
        }
    }else{
        res.writeHead(400, {'Content-type': 'text/html; charset=utf-8'})
    }
})

server.listen(3000)
console.log('Servidor funcionando. Acesse localhost:3000')

// Código de instalação express e nodemon através do npm (executar esses comandos no PowerShell ou aplicação similar)

npm init -y
npm install express –save
npm install nodemon --save-dev
