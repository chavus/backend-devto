//definición y exportación del modelo

const mongoose = require('mongoose')

//Schema
const postsSchema = new mongoose.Schema({
    postDescription: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    
})

//model  - para generar el modelo necesitamos un esquema
//crear el modelo para koders (la colección)
const model = mongoose.model('koders', koderSchema )

module.exports = model