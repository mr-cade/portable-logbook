// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const { query } = require("express");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// require models
var db = require("../models")

module.exports = function (app) {
    app.get("/", function (req, res) {
        //  If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public", "index.html"));
    });
    // res.sendFile(path.join("./public/signup.html"));

    app.get("/signup", function (req, res) {
        //  If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        } else {
            res.sendFile(path.join(__dirname, "../public", "signup.html"))
        }
    });

    app.get("/login", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public", "login.html"));

    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members", function (req, res) {
        // console.log("data:", db.logbook);
        db.logbook.findAll({}).then(function (dbLogbook) {
            console.log(dbLogbook);
            res.render("logbook", {logbook:dbLogbook});
        });
    });

    // here we pull up the user's profile page
    app.get("/profile", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public", "profile-page.html"))
    })
};
