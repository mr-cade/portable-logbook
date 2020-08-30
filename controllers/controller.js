var express = require("express");

var router = express.Router();
var logbook = require("../models/log.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/logbook");
});

router.get("/logbook", function(req, res) {
//   logbook.all(function(logbook) {
    
    res.render("../public/index.html", { logbook_data: logbook });
  });
;

module.exports = router;
