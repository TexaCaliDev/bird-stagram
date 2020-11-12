const {
    model
} = require('mongoose')

const UserSchema = require('./models/User')
const PostSchema = require('./models/Post')
const FavBirdSchema = require('./models/FavoriteBird')

const User = model('users', UserSchema)
const Post = model('Posts', PostSchema)
const FavBird = model('FavBirds', FavBirdSchema)

module.exports = {
    User,
    Post,
    FavBird
}