
const {
    Post
} = require('../db/schema')

const GetPostById = async (req, res) => {
    try {
      const post = await post.findById(req.params.post_id).populate([
        {
          model: 'posts',
          path: 'post_id',
          select: '_id post'
        },
        {
          path: 'posts',
          populate: {
            path: 'post_id',
            model: 'posts',
            select: '_id post'
          }
        }
      ])
      res.send(post)
    } catch (error) {
      throw error
    }
  }


  const CreatePost = async (req, res) => {
    console.log(req.body)
    try {
                      
      const post = new Post({
      
       
       birdName: req.params.birdName,
       description: req.params.description,
       region: req.params.description,
       rarity: req.params.rarity
      })
      post.save()
      res.send(post)
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

// const UpdatePost = async (req, res) => {
//   try {
//     await Post.findByIdAndUpdate(
//       req.params.post_id,
//       {
//         ...req.body
//       },
//       { new: true, useFindAndModify: false },
//       (error, (d) => (error ? error : res.send(d)))
//     )
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
 
    CreatePost,
    DeletePost,
    // UpdatePost,
    GetPostById
}