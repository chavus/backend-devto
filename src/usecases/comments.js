const Comments = require('../models/comments')
const moment = require('../lib/moment')

function getAll(){
    return Comments.find().populate("userName")
}

function postOne(comment){

    let { content, userName } = comment

    //const date = new Date()
    //commentObject.creationDate = date
    //commentObject.readableCreationDate = date.toDateString().split(" ").slice(1,3).join(" ")
    const creationDate = new Date()  //moment.getDate()
    const readableCreationDate = creationDate.toDateString().split(" ").slice(1,3).join(" ")
    const reactionsCounter = 0

    return Comments.create({content, creationDate, userName, reactionsCounter, readableCreationDate})
}

function eraseById(id){
    return Comments.findByIdAndDelete(id)
}

function updateId(id, newData){
    return Comments.findByIdAndUpdate(id, newData, {new: true})
}

function getById(id){
    return Comments.findById(id).populate("userName")
}

module.exports = {
    getAll,
    postOne,
    eraseById,
    updateId,
    getById
}
