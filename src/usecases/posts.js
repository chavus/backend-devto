const Post = require('../models/posts')

function getAll(){
    return Post.find().populate("writer").populate("comments")
}


function getOneById(id){
    return Post.findById(id).populate("writer").populate("comments")
}

function postOne(post){

    let { title, content, coverImage , tagsList , publishedTimestamp , readablePublishedDate , 
           positiveReactionsCount,  readingTimeMinutes , writer, comments }  = post

           publishedTimestamp = moment.getDate()
           positiveReactionsCount = 0
           comments =[]

    return Post.create({ title, content, coverImage , tagsList , publishedTimestamp , readablePublishedDate , 
        positiveReactionsCount,  readingTimeMinutes , writer, comments })
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
