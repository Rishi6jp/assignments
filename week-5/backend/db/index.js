//  start writing from here

const mongoose = require('mongoose')
const express = require('express')

const Schema = mongoose.Schema

const TodoModel = new Schema({
    title: String,
    description: String,
    isDone: Boolean
})

const UserModel = new Schema({
    name: String,
    email: String,
    password: String,
})

const userModel = mongoose.Model('User', UserModel)
const todoModel = mongoose.Model('Todo', TodoModel)


module.exports = {
    userModel: userModel,
    todoModel: todoModel

}