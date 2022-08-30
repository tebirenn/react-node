const ApiError = require("../error/ApiError");
const bcrypt = require('bcrypt');
const { User, Blog } = require('../models/models');
const jwt = require('jsonwebtoken');

const generateJWT = (id, login, fullname) => {
    return jwt.sign(
        { id, login, fullname }, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}

class UserController {
    async registration (req, res, next) {
        const { login, fullname, password } = req.body;

        if (!login || !fullname || !password) {
            return next(ApiError.badRequest('Некорретные данные!'));
        }
        const candidate = await User.findOne({where: {login}});

        if (candidate) {
            return next(ApiError.badRequest('Пользователь уже существует!'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ login, fullname, password: hashPassword });
        const token = generateJWT(user.id, user.login, user.fullname); 
        return res.json({ token });
    }

    async login (req, res, next) {
        const { login, password } = req.body;
        const user = await User.findOne({where: {login}});
        
        if (!user) {
            return next(ApiError.internal('Логин или пароль не правильный!'));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);

        if (!comparePassword) {
            return next(ApiError.internal('логин или Пароль не правильный!'));
        }

        const token = generateJWT(user.id, user.login, user.fullname);
        return res.json({ token });
    }
    
    async check (req, res, next) {
        const token = generateJWT(req.user.id, req.user.login, req.user.fullname);
        return res.json({ token });
    }
}

module.exports = new UserController();