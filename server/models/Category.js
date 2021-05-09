const moogoose = require('mongoose')

const schema = new moogoose.Schema({
    name:{type:String},
    categories:{type:moogoose.SchemaTypes.ObjectId,ref:'Category'},
})

module.exports = moogoose.model('Category',schema)