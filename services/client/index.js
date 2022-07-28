const express = require("express");
const routeMiddleware = require("../../middlewares/route");
const authenticationMiddleware = require('../../middlewares/authentication');
const router = express.Router();
const create = require('./create');
const measurents = require('./measurents');

router.post('/create', authenticationMiddleware, routeMiddleware(create));
router.post('/measurents', authenticationMiddleware, routeMiddleware())
module.exports = router;