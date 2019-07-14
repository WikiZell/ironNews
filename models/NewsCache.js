const mongoose = require("mongoose")

const Schema = mongoose.Schema

var newsCacheSchema = new Schema({
    id: String,
    user: String,
    name: String,
    sources: String,
    q: String,
    from: Date,
    to: Date,
    sortBy: String,
    category: String,
    language: String,
    country: String,
    page: String,
    domains: String,
    pageSize: String,
    data: JSON
},{
    timestamps: true
});


/* userSchema.statics.isAvailable = function (username) {
    return this.findOne({ username: username })
        .then((user) => {
            if (user) return false
            else return true
        })
} */

module.exports = mongoose.model("newsCache", newsCacheSchema)