const mongoose = require("mongoose")
const Schema = mongoose.Schema

var configStateSchema = new Schema({
    categories: Array,
    languages: Array,
    countries: Array,
    config: Object,
    sources: JSON,
    data: JSON
},{
    timestamps: true
});



module.exports = mongoose.model("configState", configStateSchema)