//  start writing your code from 
const {Router} = require('express')

const { default: mongoose } = require('mongoose')
const { todoModel }  = require('../db/index')

const todoRouter = Router()

todoRouter.use(express.json())

todoRouter.post('/todo', async(req, res) => {
    const {title, description} = req.body

    const todo = todoModel.create({
        title: title,
        description: description
    })
})

module.exports = {
    todoRouter
}