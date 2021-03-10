const express = require('express');
const UserController = require('../../controllers/UserController');
const HomeController = require('../../controllers/HomeController');

const rootRouter = (UserModel) => {
    const router = express.Router();

    const userController = new UserController(UserModel);
    const homeController = new HomeController();
    
    router.get('/', homeController.index);

    router.get('/public/:file', homeController.image);

    router.post('/register', userController.register);

    router.post('/login', userController.login);

    router.delete('/logout', userController.logout);

    return router;
}

module.exports = rootRouter;