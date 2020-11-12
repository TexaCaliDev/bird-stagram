const {
    Post
} = require('../db/schema')

const GetPosts = async (req, res) => {
    try {
      const { page, limit } = req.query
      const offset =
        page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
      const posts = await Post.find()
        .limit(parseInt(limit))
        .skip(offset)
        .sort({ popularity_rating: 'desc' })
      res.send(posts)
    } catch (error) {
      throw error
    }
  }
const CreatePost = async (req, res) => {
    try {
        const newPost = new Post({
            ...req.body,
            user_id: req.params.user_id
        })
        newPost.save()
        res.send(newPost)
    } catch (error) {
        throw error
    }
}

const DeletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.post_id)
        res.send({
            msg: 'Post deleted'
        })
    } catch (error) {
        throw error
    }
}

const UpdatePost = async (req, res) => {
    try {
        await Post.find({
            Post: req.params.post_id
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetPosts,
    CreatePost,
    DeletePost,
    UpdatePost
}