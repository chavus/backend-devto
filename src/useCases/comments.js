const Comments = require('../models/comments')

function getAll(){
    return Comments.find()
}

function postOne(somePost){
    return Comments.create(somePost)
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
