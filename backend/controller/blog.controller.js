const db = require('../db');

class BlogController {
    async createBlog (req, res) {
        const { title, description, userId } = req.body;

        const newPost = await db.query(`
            INSERT INTO blogs (title, description, user_id)
            VALUES ($1, $2, $3)
            RETURNING * 
        `, [title, description, userId]);

        res.json(newPost.rows[0]);
    }

    async getBlogByUser (req, res) {
        const id = req.params.id;

        const blogs = await db.query(`
            SELECT *
            FROM blogs
            WHERE user_id = $1
        `, [id]);

        res.json(blogs.rows);
    }

    async getBlogs (req, res) {
        const blogs = await db.query(`
            SELECT *
            FROM blogs
        `);

        res.json(blogs.rows);
    }

    async updateBlog (req, res) {
        const { id, title, description, userId } = req.body;

        const blog = await db.query(`
            UPDATE blogs
            SET title = $1, description = $2, user_id = $3
            WHERE id = $4
            RETURNING *
        `, [title, description, userId, id]);

        res.json(blog.rows[0]);
    }

    async deleteBlog (req, res) {
        const id = req.params.id;

        const deletedBlog = await db.query(`
            DELETE FROM blogs
            WHERE id = $1
        `, [id]);

        res.json(deletedBlog.rows[0]);
    }
}

module.exports = new BlogController();