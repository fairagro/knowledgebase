(function() {
  var password = "fairagro@@";
  var isAuthenticated = sessionStorage.getItem('authenticated') === 'true';
  
  if (!isAuthenticated) {
    var userPassword = prompt("Please enter the password to access this site:");
    if (userPassword === password) {
      sessionStorage.setItem('authenticated', 'true');
    } else {
      document.body.innerHTML = '<h1 style="text-align:center;margin-top:20%;">Access Denied</h1>';
      throw new Error('Access denied');
    }
  }
})();
