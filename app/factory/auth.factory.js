app.factory('AuthFactory', ($http) => {
  let baseUrl = '';

  let userLogin = (email, pass) => {
    console.log(email, pass);
  }

  return {
    userLogin,
  }
});
