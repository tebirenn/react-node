require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleWare/ErrorHandlingMiddleware');
const path = require('path');

// const userRouter = require('./routes/user.routes');
// const blogRouter = require('./routes/blog.routes');

const PORT = process.env.PORT || 8080; 
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);


app.use(errorHandler);

// app.use('/api', userRouter);
// app.use('/api', blogRouter);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
    } catch (e) {
        console.log(e);
    }
}

start();





















// const cors = require('cors');
// const {corsOptionsDelegate} = require('./config/cors');
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(require('cookie-parser')());
// app.use(cors(corsOptionsDelegate));

// app.listen(process.env.PORT , () => console.log(`Server is listening on port ${process.env.PORT}`));



// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);
// console.log(process.argv);