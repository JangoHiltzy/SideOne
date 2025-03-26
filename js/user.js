// SET CURRENT USER
function initializeUser() {
  if (!localStorage.getItem("currentUser")) {
    localStorage.setItem("currentUser", "User");
  }
}

initializeUser();
