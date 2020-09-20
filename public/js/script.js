$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".nav-signup").text(data.email);
    
  });
  // $.get("api/user_data").then(function (data) {
  //   console.log(user.id)
  //   if (user.id) {
  //     $(".nav-login").text("Logout")
  //     $(".nav-login").attr("href", "/logout");
  //   } else {
  //     $(".nav-login").text("Login")
  //   }
  // }
  // )
});