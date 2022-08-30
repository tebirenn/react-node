const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
    async createUser (req, res) {
        const { login, fullname, password } = req.body;

        const hashPassword = await bcrypt.hash(password, 5);

        const newUser = await db.query(`
            INSERT INTO users (login, fullname, password) 
            VALUES ($1, $2, $3) 
            RETURNING *
        `, [login, fullname, hashPassword]);

        const token = jwt.sign({
                id: newUser.rows[0].id,
                login: newUser.rows[0].login,
                fullname: newUser.rows[0].fullname,
            }, 
            process.env.SECRET_KEY,
            { expiresIn: '24h' }
        );

        res.json({ token });
        
    }

    async getUsers (req, res) {
        const users = await db.query(`
            SELECT * 
            FROM users
        `);

        res.json(users.rows);
    }

    async getOneUser (req, res) {
        const id = req.params.id;

        const user = await db.query(`
            SELECT * 
            FROM users 
            WHERE id = $1
        `, [id]);

        res.json(user.rows[0]);
    }

    async updateUser (req, res) {
        const { id, login, fullname, password } = req.body;

        const user = await db.query(`
            UPDATE users
            SET login = $1, fullname = $2, password = $3
            WHERE id = $4
            RETURNING * 
        `, [login, fullname, password, id]);

        res.json(user.rows[0]);

    }

    async deleteUser (req, res) {
        const id = req.params.id;

        const user = await db.query(` 
            DELETE FROM users 
            WHERE id = $1
        `, [id]);

        res.json(user.rows[0]);
    }
}

module.exports = new UserController();