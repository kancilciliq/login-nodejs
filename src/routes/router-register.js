const router = require('express').Router();
const verifyUser = require('../configs/verify');
const registerController = require('../controller').register;

router.get('/', verifyUser.isLogout, registerController.formRegister);

router.post('/', verifyUser.isLogout, registerController.saveRegister);

module.exports = router;