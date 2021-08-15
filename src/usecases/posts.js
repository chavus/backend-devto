const Post = require('../models/posts')

function getAll(){
    return Post.find().populate("writer").populate("comments")
}

<<<<<<< HEAD
function getOneById(id){
    return Post.findById(id).populate("writer").populate("comments")
}
=======

function getOneById(id){
    return Post.findById(id).populate("writer").populate("comments")
}

function postOne(post){

    let { title, content, coverImage , tagsList , publishedTimestamp , readablePublishedDate , 
           positiveReactionsCount,  readingTimeMinutes , writer, comments }  = post

           publishedTimestamp = moment.getDate()
           positiveReactionsCount = 0
           comments =[]
>>>>>>> 0b59ea9160b807ff54de3c773137c22fc097c3ff

function postOne(somePost){
    return Post.create(somePost)
}

function eraseById(id){
    return Post.findByIdAndDelete(id)
}

function updateId(id, newData){
    return Post.findByIdAndUpdate(id, newData, {new: true})
}

module.exports = {
    getAll,
    getOneById,
    postOne,
    eraseById,
    updateId
}
