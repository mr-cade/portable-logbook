var authentication = require("../../config/middleware/isAuthenticated.js")

$(document).ready(function(){
if(authentication()) {
    $(".nav-login").text("Profile")
  } else {
    $(".nav-login").text("Login")
  };
});