const mongoose = require("mongoose")
const Schema = mongoose.Schema
var userSchema = new Schema({
    username: String,
    password: String,
    fullName: String,
    image: String,
    readLater: Array
})

userSchema.statics.isAvailable = function (username) {
    return this.findOne({ username: username })
        .then((user) => {
            if (user) return false
            else return true
        })
}

module.exports = mongoose.model("users", userSchema)