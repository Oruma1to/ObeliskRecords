const { Router } = require('express');
const controllers = require('../controllers');
const restrict = require('../helpers/index');

const router = Router();

//Users
router.get('/users', restrict, controllers.getUsers);
router.post('/signup', controllers.signUp);
router.post('/signin', controllers.signIn);
router.get('/verifyuser', controllers.verifyUser);
router.get('/users/:id', restrict, controllers.getUser);
router.put('/users/:id', restrict, controllers.updateUser);
//Albums
router.get('/albums', controllers.getAlbums);
router.get('/albums/:id', controllers.getAlbum);
router.post('/albums', controllers.createAlbum);
router.put('/albums/:id', controllers.editAlbum);
router.delete('/albums/:id', controllers.deleteAlbum);

//Terms
router.get('/search/:terms', controllers.searchBar);

//Shopping Cart
router.get('/cart', controllers.getCart);
router.put('/cart', controllers.updateCart);

module.exports = router;
