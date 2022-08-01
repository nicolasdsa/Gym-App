const express = require("express");
const routeMiddleware = require("../../middlewares/route");
const authenticationMiddleware = require('../../middlewares/authentication');
const router = express.Router();
const create = require('./create');
const list = require('./list');
const measurents = require('./measurents');

router.post('/', authenticationMiddleware, routeMiddleware(create));
router.get('/', authenticationMiddleware, routeMiddleware(list));
router.get('/:id', authenticationMiddleware, routeMiddleware(measurents));
module.exports = router;