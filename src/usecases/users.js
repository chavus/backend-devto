const Users = require('../models/users')
const bcrypt = require('../lib/bcrypt')
const moment = require('../lib/moment')

function getAll(){
    return Users.find()
}

function getOneById(id){
    return Post.findById(id)
}


// function postOne(someUser){
//     return Users.create(someUser)

// }

async function postOne({name, userName, joinDate, biography, nationality, email, password}){
    //validar que no exista alguien con el mismo correo
    //después de validar que no existe, encriptar la información

    const userFound = await Users.findOne( { email })
   
    if (userFound) throw new Error('Email already exists')

    //si no existe el correo, si se guarda el registro y se encripta el passsword
    const encryptedpassword = await bcrypt.hash(password)

   return Users.create({name, userName, joinDate : moment.getDate(), biography, nationality, email, password: encryptedpassword})

}

function eraseById(id){
    return Users.findByIdAndDelete(id)
}

function updateId(id, newData){
    return Users.findByIdAndUpdate(id, newData, {new: true})
}

module.exports = {
    getAll,
    getOneById,
    postOne,
    eraseById,
    updateId
}
