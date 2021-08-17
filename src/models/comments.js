//definición y exportación del modelo

const mongoose = require('mongoose')

//Schema
const commentsSchema = new mongoose.Schema({
    content: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: [true, 'content is required'],
        trim: true
    },
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'Username is required']
    },
    creationDate: {
        type: Date,
        required: [true, 'Join date is required']
    },
    readableCreationDate:{
        type: String
    },
    reactionsCounter: {
        type: Number,
        min: 0
    }
})

//model  - para generar el modelo necesitamos un esquema
//crear el modelo para koders (la colección)
const model = mongoose.model('comments', commentsSchema )

module.exports = model