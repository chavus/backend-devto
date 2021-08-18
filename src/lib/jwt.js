const jwt = require("jsonwebtoken")

// const { JWT_SECRET } = process.env
const JWT_SECRET = "secretkey"

function sign(payload){
    return jwt.sign(payload, JWT_SECRET, {expiresIn: "7d"})
}

function verify(token){
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    ...jwt,
    sign,
    verify
}