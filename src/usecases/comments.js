const Comments = require('../models/comments')
const moment = require('../lib/moment')

function getAll(){
    return Comments.find().populate("userName")
}

function postOne(comment){

    let { content, creationDate, userName, reactionsCounter  } = comment

    creationDate = moment.getDate()
    reactionsCounter = 0

    return Comments.create({content, creationDate, userName, reactionsCounter})
}

function eraseById(id){
    return Comments.findByIdAndDelete(id)
}

function updateId(id, newData){
    return Comments.findByIdAndUpdate(id, newData, {new: true})
}

module.exports = {
    getAll,
    postOne,
    eraseById,
    updateId
}
