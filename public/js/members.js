// const isAuthenticated = require("../../config/middleware/isAuthenticated");
// const { is } = require("sequelize/types/lib/operators");

// const isAuthenticated = require("../../config/middleware/isAuthenticated");

$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".nav-signup").text(data.email);
    });
    $.get("api/user_data").then(function(data){
      if(data) {
        $(".nav-login").text("Logout")
    }
    }
    )
    // if(isAuthenticated) {
    //   $(".nav-login").text("Logout")
    // }
  });
  