const {
    Schema
} = require('mongoose')

module.exports = new Schema({
    picture: {
        type: String,
        
    },
    user_Id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
        
    },
    birdName: {
        type: String,
        
    },
    description: {
        type: String,
    },
    region: {
        type: String,
    },
    rarity: {
        type: Number,
    }
})