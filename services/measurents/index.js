const express = require("express");
const routeMiddleware = require("../../middlewares/route");
const authenticationMiddleware = require('../../middlewares/authentication');
const router = express.Router();
const create = require('./create');

router.post('/create', authenticationMiddleware, routeMiddleware(create));

module.exports = router;