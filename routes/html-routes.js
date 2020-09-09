// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
var contacts = require("../models/logbook.js")
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
        // res.send('Hi Hello How are ya')
    });

    app.get("/login", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public", "login.html"));

    });

    // app.get("/logout", function (req, res){
    //     if(req.user) {
    //         res.redirect("/login");
    //     } 
    //     res.sendFile(path.join(__dirname, "../public", "login.html"))
    // })

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members", isAuthenticated, function (req, res) {
        contacts.all(function(data){
            let hbsObject = {
                contacts: data
            }
            console.log(hbsObject);
            res.render("logbook", hbsObject);
        })
        


        // res.sendFile(path.join(__dirname,"../views","logbook.handlebars"));
    });

    // here we pull up the user's profile page
    app.get("/profile", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public", "profile-page.html"))
    })
};
