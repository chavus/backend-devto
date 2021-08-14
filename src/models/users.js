//definición y exportación del modelo

const mongoose = require('mongoose')

//Schema
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: [true, 'Name is required'],
        trim: true
    },
    userName: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: [true, 'Username is required'],
        trim: true
    },
    joinDate: {
        type: Date,
        required: [true, 'Join date is required']
    },
    biography: {
        type: String,
        minLength: 2,
        maxLength: 500,
        trim: true
    },
    nationality: {
        type: String,
        minLength: 2,
        maxLength: 50,
        enum: ['Mexico', 'El Salvador', 'Guatemala', 'United States', 'Canada', 'Other' ],
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        match: /.+@.*\..*/
    }
})

//model  - para generar el modelo necesitamos un esquema
//crear el modelo para koders (la colección)
const model = mongoose.model('users', usersSchema )

module.exports = model