// const isAuthenticated = require("../../config/middleware/isAuthenticated");
// const { is } = require("sequelize/types/lib/operators");

$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".nav-signup").text(data.email);
    });
    // if(isAuthenticated) {
    //   $(".nav-login").text("Logout")
    // }
  });
  