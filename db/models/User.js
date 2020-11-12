const {Schema} = require('mongoose')

module.exports = new Schema (
   {
       user_id:{
           type: Schema.Types.ObjectId,
           ref: 'users'
       },
       profilePicture: {
           type: String,
       },
       name: {
           type: String,
           required: true
       },
       email: {
           type: String,
           required: true,
           unique: true,
           index: true
       },
       password_digest: {
           type: String,
           required: true
       },
       posts: {
           type: Schema.Types.ObjectId,
           ref: 'post'
       },
       favoriteBird: {
           type: Schema.Types.ObjectId,
           ref: 'favoriteBird' 
       }
   },
   {timestamps: true}
    
)