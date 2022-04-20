const express = require('express');
const recordeRoute = require('./record');

const router = express.Router();

router.use('/records', recordeRoute);

router.get('/',(req, res, next) => {
    res.send(me)
});
router.get('/',(req, res, next) => {});
router.post('/',(req, res, next) => {});
router.put('/',(req, res, next) => {});
router.delete('/',(req, res, next) => {});

module.exports = router;