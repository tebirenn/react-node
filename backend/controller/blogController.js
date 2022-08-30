const { Blog } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class BlogController {
    // async create (req, res, next) {
    //     try {
    //         const { title, description, userId } = req.body;

    //         const { img } = req.files;
    //         let fileName = uuid.v4() + ".jpg";
    //         img.mv(path.resolve(__dirname, '..', 'static', fileName));

    //         const blog = await Blog.create({ title, description, userId, img: fileName });
    //         return res.json(blog);
    //     } catch (e) {
    //         next(ApiError.badRequest(e.message));
    //     }
    // }

    async create (req, res, next) {
        try {
            const { title, description, userId } = req.body;

            const blog = await Blog.create({ title, description, userId, img: "97971fdd-fb75-4c23-86e7-e905f5bdb406.jpg" });
            return res.json(blog);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll (req, res) {
        const blogs = await Blog.findAll();
        return res.json(blogs);
    }

    async getById (req, res) {
        const { id } = req.params;

        const blog = await Blog.findOne(
            {where: {id}}
        );

        return res.json(blog);
    }
    
    async getAllByUser (req, res) {
        const { id } = req.params;

        const blogs = await Blog.findOne(
            {where: {userId: id}}
        );

        return res.json(blogs);
    }

    async update (req, res) {
        const { id, title, description } = req.body;

        const blog = await Blog.update(
            { title, description },
            {where: {id}}  
        );

        return res.json(blog);
    }

    async delete (req, res) {

    }
}

module.exports = new BlogController();