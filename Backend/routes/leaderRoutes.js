const express = require('express');
const router = express.Router();
const {getLeaders, postLeaders} = require('../controllers/leaderController')

router.get('/leader/get', getLeaders);
router.post('/leader/post', postLeaders)

module.exports = router

