const mongoose = require("mongoose")

const DB_USER = "devtouser"
const DB_PASSWORD = "kodemia"
const DB_HOST = "backend-devto.oqyno.mongodb.net" 
const DB_NAME = "backend-devto" 

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

// Connection to DB should happen first
function connect(){
    return mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false}) // returns the promise
    }

module.exports = connect