// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
  //  If the user already has an account send them to the members page
//     if (req.user) {
//      res.redirect("/members");
// }

    // res.send('Hi Hello How are ya')
    //res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <title>Passport Authentication</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/lumen/bootstrap.min.css">
      <link href="stylesheets/style.css" rel="stylesheet">
    </head>
    
    <body>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <h2>Sign Up Form</h2>
            <form class="signup">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="email-input" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="password-input" placeholder="Password">
              </div>
              <div style="display: none" id="alert" class="alert alert-danger" role="alert">
                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span class="sr-only">Error:</span> <span class="msg"></span>
              </div>
              <button type="submit" class="btn btn-default">Sign Up</button>
            </form>
            <br />
            <p>Or log in <a href="/login">here</a></p>
          </div>
        </div>
      </div>
    
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script type="text/javascript" src="js/signup.js"></script>
    
    </body>
    
    </html>`)
    // res.sendFile(path.join("./public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "/public/login.html"));

  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};
