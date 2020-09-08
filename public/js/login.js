$("#password").on("focusout", function () {
    if ($(this).val() != $("#password2").val()) {
      $("#password2").removeClass("valid").addClass("invalid");
    } else {
      $("#password2").removeClass("invalid").addClass("valid");
    }
  });
  

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      })
        .then(function() {
          window.location.replace("/members");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
          alert("No user found. Please check your login information or signup for a free account.");
          window.location.replace("/login");
        });

    }
  });