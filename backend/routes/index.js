var express = require("express");
const searchProperties = require("../controllers/properties");
const getLocations = require("../controllers/properties");
var router = express.Router();

/* GET home page. */
router.get("/", searchProperties);
router.get("/locations", getLocations);

module.exports = router;
