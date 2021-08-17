const Post = require('../models/posts')
const moment = require('../lib/moment')

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

<<<<<<< HEAD
           return Post.create({ title, content, coverImage , tagsList , publishedTimestamp , readablePublishedDate , 
            positiveReactionsCount,  readingTimeMinutes , writer, comments })
    }
=======
    return Post.create({ title, content, coverImage , tagsList , publishedTimestamp , readablePublishedDate , 
        positiveReactionsCount,  readingTimeMinutes , writer, comments })
}
>>>>>>> antonio

function eraseById(id){
    return Post.findByIdAndDelete(id)
}

function updateId(id, newData){
    return Post.findByIdAndUpdate(id, newData, {new: true}).populate("writer").populate("comments")
}

module.exports = {
    getAll,
    getOneById,
    postOne,
    eraseById,
    updateId
}
