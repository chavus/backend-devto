//definición y exportación del modelo

const mongoose = require('mongoose')

//Schema
const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: [true, 'Title is required'],
        trim: true
    },
    content: {
        type: String,
        minLength: 2,
        maxLength: 1000
        //required: true
    },
    coverImage: {
        type: Buffer
       
    },
    tagsList: [{
        type: String,
        minLength: 2,
        maxLength: 50
        //required: true
    }],
    publishedTimestamp: {
        type: Date,
        required: true
    },
    readablePublishedDate: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    positiveReactionsCount: {
        type: Number,
        min: 0
    },
    readingTimeMinutes: {
        type: Number,
        min: 0,
        required: [true, 'Set reading times to 0']
    },
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'Posts required an associated writer']
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comments'
    }]
})

//model  - para generar el modelo necesitamos un esquema
//crear el modelo para koders (la colección)
const model = mongoose.model('posts', postsSchema )

module.exports = model