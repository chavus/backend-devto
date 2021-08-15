const Comments = require('../models/comments')

function getAll(){
    return Comments.find()
}

function postOne(someComments){
    return Comments.create(someComments)
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
