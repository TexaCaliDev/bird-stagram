const {Schema} = require('mongoose')

module.exports = new Schema(
    {
        picture: {
            type: String
        },
        birdName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        Region: {
            type: String,
            required: true
        }
    }
)