const Users = require('../models/users')

function getAll(){
    return Users.find()
}

function postOne(somePost){
    return Users.create(somePost)
}

function eraseById(id){
    return Users.findByIdAndDelete(id)
}

function updateId(id, newData){
    return Users.findByIdAndUpdate(id, newData, {new: true})
}

module.exports = {
    getAll,
    postOne,
    eraseById,
    updateId
}
