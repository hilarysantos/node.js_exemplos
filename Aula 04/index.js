// Aula 04

//Código para instalação do ejs no PowerShell: 

npm install ejs

//Códigos do index.js feitos na aula:

const express = require('express')
const app = express()

app.use(express.static('./views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/produtos', (req, res) => {
    res.render('produtos')
})

app.post('/cadastro', (req, res) => {
    res.render('cadastro')
})

app.put('/atualizarperfil', (req, res) => {
    res.render('update')
})

app.delete('/deletarconta', (req, res) => {
    res.render('delete')
})

app.listen(3000, () => {
    console.log('Servidor funcionando. Acesse localhost:3000')
})
