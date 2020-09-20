$(document).ready(function() {
    // references to the form and inputs
    var profileChangeForm = $("form#profile-edit")
    var nameInput = $("#name-input")
    var labelInput = $("#label-input")
    var emailInput = $("#email-input")
    var aboutInput = $("#about-input")
    var currentPasswordInput = $("#current-password-input")
    var newPasswordInput = $("#new-password-input")
    var confirmPasswordInput = $("#confirm-password-input")

    var updating = false;

    profileChangeForm.on("submit", function() {
        var updatedProfile = {
            name: nameInput.val().trim(),
            label: labelInput.val().trim(),
            email: emailInput.val().trim(),
            about: aboutInput.val().trim(),
            password: currentPasswordInput.val().trim(),
            newPassword: newPasswordInput.val().trim(),
            confirmPassword: confirmPasswordInput.val().trim()
        };
        console.log(updatedProfile)

        if (updating) {
            // newPost.id = postId;
            updatePost(updatedProfile);
          }
          else {
            submitPost(updatedProfile);
          }
        });

        function updatePost(profile) {
            
        }
    })