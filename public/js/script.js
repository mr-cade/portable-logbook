var authentication = require("../../config/middleware/isAuthenticated.js");
const isAuthenticated = require("../../config/middleware/isAuthenticated.js");

$(document).ready(function(){
if(isAuthenticated) {
    $("#nav-login").text("Profile")
  } else {
    $("#nav-login").text("Login")
  };
});