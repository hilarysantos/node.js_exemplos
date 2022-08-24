// Aula 05

const express = require('express')
const app = express()

const { Sequelize, DataTypes } = require('sequelize')
const TaskModel = require('./models/task')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my-database.db'
})

const tasks = TaskModel(sequelize, DataTypes)

app.use(express.static('./views'))
app.set('view engine', 'ejs')

app.get('/home', async (req, res) => {
    const allTasks = await sequelize.query('SELECT * FROM Tasks')
    res.json({ allTasks })
})

app.get('/home/:id', async (req, res) => {
    const taskId = req.params.id
    const task = await tasks.findByPk(taskId)
    res.render('home', { id: task.id, name: task.name })
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
