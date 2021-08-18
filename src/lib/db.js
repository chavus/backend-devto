const mongoose = require("mongoose")

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

// Connection to DB should happen first
function connect(){
    return mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false}) // returns the promise
    }

module.exports = connect