function LoginController(AuthFactory) {
  var vm = this;
  vm.$onInit = () => {
    var vm = this;
    vm.passwordInputType = 'password';

    vm.showPassword = () => {
      switch (vm.passwordInputType) {
        case 'text':
          vm.passwordInputType = 'password';
          break;
        case 'password':
          vm.passwordInputType = 'text';
          break;
      }
    }

    vm.login = (email, password) => {
      AuthFactory.userLogin(email, password);
    }
  }
}

app.component('appLogin', {
  restrict: 'E',
  template: `
  <div id="log-in-modal-popup" class="authentication-modal">
    <div class="custombox-modal-content">
      <a href="javascript:void(0);" onclick="Custombox.modal.close();" class="authentication-modal-close">
          <i class="fa fa-times"></i>
        </a>
      <div class="modal-content-title">
        <h3>Log In</h3>
      </div>
      <div class="modal-content-form">
        <form>
          <div class="input-field">
            <i class="icon-non-interactive-email prefix"></i>
            <input id="txtEmail" type="text" class="validate" ng-model="vm.email">
            <label for="txtEmail">Email Address</label>
          </div>
          <div class="input-field">
            <i class="icon-non-interactive-lock prefix"></i>
            <span class="postfix toggle-passsword" ng-click="vm.showPassword()"><i class="icon-non-interactive-eye"></i></span>
            <input id="txtPassword" type="{{vm.passwordInputType}}" class="validate" ng-model="vm.password">
            <label for="txtPassword">Password</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" class="filled-in" id="chkLoggedIn" checked="checked" />
            <label for="chkLoggedIn">Stay logged in</label>
          </div>
          <div class="link-forgot">
            <a href="#">Forgot Password?</a>
          </div>
          <div class="clearfix"></div>
          <div class="btn-authentication-left">
            <button class="btn" ng-click="vm.login(vm.email, vm.password)">LOG IN</button>
          </div>
          <div class="link-login">
            Not a member? <a href="#">Sign Up here</a>
          </div>
          <div class="clearfix"></div>
        </form>
      </div>
      <div class="modal-content-footer">
        <div class="modal-footer-alter">OR</div>
        <div class="modal-footer-title">Log In with social platforms</div>
        <div class="social-links">
          <ul>
            <li>
              <a href="#"><i class="icon-non-interactive-fb"></i></a>
            </li>
            <li>
              <a href="#"><i class="icon-non-interactive-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="icon-non-interactive-linkedin"></i></a>
            </li>
            <li>
              <a href="#"><i class="icon-non-interactive-gplus"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  `,
  controller: LoginController,
  controllerAs: 'vm',
})
