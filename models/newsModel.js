const { model, Schema } = require('mongoose')

const data = new Schema({
    title: {
        type: String,
        required: true
    },
    readMore: {
        type: String,
        required: true
    },
    datePublished: {
        type: String,
        required: true
    }
    ,description: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
})

module.exports = model('newsTest2', data)