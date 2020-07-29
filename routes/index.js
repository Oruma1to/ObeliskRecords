const { Router } = require('express');
const controllers = require('../controllers');
const restrict = require('../helpers/index');

const router = Router();

//Users
router.get('/users', controllers.getUsers);
router.post('/signup', controllers.signUp);
router.post('/signin', controllers.signIn);
router.put('/users/:id', restrict, controllers.updateUser);
//Albums
router.get('/albums', controllers.getAlbums);

module.exports = router;
