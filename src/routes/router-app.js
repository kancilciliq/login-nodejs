const router = require('express').Router();
const homeController = require('../controller').home;
const profileController = require('../controller').profile;
const verifyUser = require('../configs/verify');

router.get('/', verifyUser.isLogin, homeController.home);
router.get('/profile', verifyUser.isLogin, profileController.profile);

module.exports = router;