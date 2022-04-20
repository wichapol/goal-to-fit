const express = require('express');
const loginRouter = require('./login');
const registerRouter = require('./register');
const userByIdRouter = require('./userById')
const users = require('../DataToTast/UserTest.json')
const router = express.Router();

router.use('/login', loginRouter );
router.use('/register', registerRouter);
router.use('/me', userByIdRouter);



router.get('/username/:username',(req, res, next) => {});
router.get('/',(req, res, next) => {
    res.send(users)
});
router.delete('/',(req, res, next) => {});


module.exports = router;