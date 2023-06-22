function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var passwordToggle = document.querySelector(".password-toggle");
  
    if (passwordInput.type === "password") {
      password.setAtribute("type", "text");
      passwordToggle.style.backgroundImage = "url('/images/visibility_off_FILL0_wght400_GRAD0_opsz48.pn')";
    } else {
      passwordInput.type = "password";
      passwordToggle.style.backgroundImage = "url('/images/visibility_FILL0_wght400_GRAD0_opsz48.png)";
    }
  }
  