'use strict'

 const Post = use('App/Models/Post')
 
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    return await Post.query().paginate(1, 10)
  }

  /**
   * Render a form to be used for creating a new post.
   * GET posts/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new post.
   * POST posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const data = request.only(['title'])
    const model = new Post
    model.fill(data)
    await model.save()
    return model
  }

  /**
   * Display a single post.
   * GET posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    return await Post.find(params.id)
  }

  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const data = request.all()
    const model = await Post.find(params.id)
    model.merge(data)
    await model.save()
    return model
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const model = await Post.find(params.id)
    await model.delete()
    return{

    success:true

    }
  }

  async grid(){
    return{
      fields: {
        _id: {label:'ID'},
        title: {label:'Title'},
        created_at: {label: 'Created at:', type: 'datetime'},
        updated_at: {label: 'Updated at:', type: 'datetime'},

      },
    }
  }
  async form(){
    return {
      fields: {
        title: {label: 'Title'},
        body: {label: 'Content', type: 'html'},
        image: {label: 'Image'},

      },
    }
  }
  async view() {
    return {
      fields: {
        _id: {label: 'ID'},
        title: {label: 'Title'},
        body: {label: 'Content',type: 'html'},
        image: {label: 'Image'},
        created_at: {label: 'Created at:',type: 'datetime'},
        updated_at: {label: 'Updated at:',type: 'datetime'},
      },
    }
  }
}

module.exports = PostController
