'use strict'

const Post = use('App/Models/Post')

class PostController {
    async index({request,view}){
        // await Post.create({
        //     title:'my second blog'
        // })
        //return 'posts ' + request.input('page')
        //return await Post.all()
        const posts = await Post.all()
        return view.render('posts.index',{
            posts:posts.toJSON(),
        })
    }
    async show({params,view}){
        const post =await Post.find(params.id)
        return view.render('posts.show',{
            post:post.toJSON(),
        })
        //return await Post.find(params.id)
        //return 'posts ' + params.id

    }
}

module.exports = PostController
