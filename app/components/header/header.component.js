app.component('appHeader', {
  restrict: 'E',
  template: `
  <header>
    <div class="container">
      <nav>
        <div class="nav-wrapper">
          <div class="row">
            <div class="col s8 m3 l4 xl5">
              <a href="index.html" class="brand-logo"></a>
            </div>
            <div class="col s4 m9 l8 xl7">
              <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><a href="javascript:;">About Us</a></li>
                <li><a href="javascript:;" class="dropdown-button" data-activates="dropdown-services">Services</a></li>
                <li><a href="javascript:;" class="dropdown-button" data-activates="dropdown-industries">Industries</a></li>
                <li><a href="javascript:;">People</a></li>
                <li><a href="javascript:;">Events</a></li>
                <li><a href="javascript:;">Contact Us</a></li>
              </ul>
              <form id="search-form" class="hide-on-med-and-down" method="post">
                <div class="search-widget">
                  <button class="search-button"></button>
                  <button class="search-close-button"></button>
                  <input type="text" id="search-input" name="search-input" placeholder="Search" />
                </div>
              </form>
              <a href="javascript:;" class="button-collapse"><i class="material-icons">menu</i></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div id="dropdown-services" class="dropdown-content">
      <div class="row">
        <div class="col s4">
          <span class="dropdown-content-heading">Modal Popups</span>
          <ul>
            <li><a href="javascript:;" class="sign-up-modal">Sign Up</a></li>
            <li><a href="javascript:;" class="log-in-modal">Log In</a></li>
            <li><a href="javascript:;" class="email-authenticate-modal">Email Authentication</a></li>
            <li><a href="javascript:;" class="reset-password-modal">Reset Password</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div id="dropdown-industries" class="dropdown-content">
      <div class="row">
        <div class="col s4">
          <span class="dropdown-content-heading">Submenu Heading One</span>
          <ul>
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li><a href="#!">three</a></li>
          </ul>
        </div>
        <div class="col s4">
          <span class="dropdown-content-heading">Submenu Heading Two</span>
          <ul>
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li><a href="#!">three</a></li>
          </ul>
        </div>
        <div class="col s4">
          <span class="dropdown-content-heading">Submenu Heading Three</span>
          <ul>
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li><a href="#!">three</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mobile-nav">
      <div class="mobile-nav-search">
        <form id="search" action="#" method="post">
          <div class="input-field">
            <i class="material-icons prefix">search</i>
            <input type="search" class="validate" />
            <label for="icon_prefix">Search</label>
          </div>
        </form>
      </div>
      <div class="mobile-nav-container">
        <ul class="collapsible" data-collapsible="accordion">
          <li>
            <a href="javascript:;">About Us</a>
          </li>
          <li>
            <div class="collapsible-header">Services <i class="fa fa-angle-down"></i></div>
            <div class="collapsible-body">
              <span class="collapsible-body-header">Modal Popups</span>
              <ul>
                <li><a href="javascript:;" class="sign-up-modal">Sign Up</a></li>
                <li><a href="javascript:;" class="log-in-modal">Log In</a></li>
                <li><a href="javascript:;" class="email-authenticate-modal">Email Authentication</a></li>
                <li><a href="javascript:;" class="reset-password-modal">Reset Password</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Industries <i class="fa fa-angle-down"></i></div>
            <div class="collapsible-body">
              <span class="collapsible-body-header">Submenu Heading One</span>
              <ul>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li><a href="#!">three</a></li>
              </ul>
              <span class="collapsible-body-header">Submenu Heading Two</span>
              <ul>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li><a href="#!">three</a></li>
              </ul>
              <span class="collapsible-body-header">Submenu Heading Three</span>
              <ul>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li><a href="#!">three</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="javascript:;">People</a>
          </li>
          <li>
            <a href="javascript:;">Events</a>
          </li>
          <li>
            <a href="javascript:;">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  `,
})
