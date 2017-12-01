app.component('appFooter', {
  restrict: 'E',
  template: `
  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col s12 m12 l6 xl4">
            <div class="row">
              <div class="col s6">
                <div class="footer-title">
                  <h4>Services</h4>
                </div>
                <div class="footer-links">
                  <ul>
                    <li><a href="#">New Product</a></li>
                    <li><a href="#">Development</a></li>
                    <li><a href="#">Product Innovation</a></li>
                    <li><a href="#">Product Management</a></li>
                    <li><a href="#">Product Marketing</a></li>
                    <li><a href="#">Training</a></li>
                  </ul>
                </div>
              </div>
              <div class="col s6">
                <div class="footer-title">
                  <h4>Customers</h4>
                </div>
                <div class="footer-links">
                  <ul>
                    <li><a href="#">Inventors</a></li>
                    <li><a href="#">Entrepreneurs</a></li>
                    <li><a href="#">Investors</a></li>
                    <li><a href="#">Buyers</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12 m12 l6 xl4">
            <div class="row">
              <div class="col s6">
                <div class="footer-title">
                  <h4>Industries</h4>
                </div>
                <div class="footer-links">
                  <ul>
                    <li><a href="#">Financial Services</a></li>
                    <li><a href="#">Telecommunication</a></li>
                    <li><a href="#">Retail</a></li>
                    <li><a href="#">Case studies</a></li>
                  </ul>
                </div>
              </div>
              <div class="col s6">
                <div class="footer-title">
                  <h4>People</h4>
                </div>
                <div class="footer-links">
                  <ul>
                    <li><a href="#">Alumni</a></li>
                    <li><a href="#">Product Managers</a></li>
                    <li><a href="#">Product Marketers</a></li>
                    <li><a href="#">Trainers</a></li>
                    <li><a href="#">People Search</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12 m12 l12 xl4">
            <div class="row">
              <div class="col s12 m6 l3 xl7">
                <div class="footer-title">
                  <h5>Get In Touch</h5>
                </div>
                <div class="footer-social">
                  <ul>
                    <li><a href="#"><i class="icon-social-rounded-facebook"></i></a></li>
                    <li><a href="#"><i class="icon-social-rounded-twitter"></i></a></li>
                    <li><a href="#"><i class="icon-social-rounded-linkedin"></i></a></li>
                    <li><a href="#"><i class="icon-social-rounded-google"></i></a></li>
                    <li><a href="#"><i class="icon-social-rounded-rss"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="col s12 m6 l3 xl5">
                <div class="footer-title">
                  <h5>Language</h5>
                </div>
                <div class="footer-language">
                  <div class="row">
                    <div class="input-field col s12">
                      <select>
                        <option value="EnglishUK">English UK</option>
                        <option value="EnglishUS">English US</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col s12 m12 l6 xl12">
                <div class="footer-title">
                  <h5>Subscribe for Our Newsletter</h5>
                </div>
                <div class="footer-newsletter">
                  <form id="newsletter" action="#" method="post">
                    <div class="input-field">
                      <i class="prefix"></i>
                      <input id="txtEmail" type="text" class="validate">
                      <label for="txtEmail">Your Email Address</label>
                    </div>
                    <div class="right-align">
                      <input type="submit" class="waves-effect waves-light btn" value="Subscribe" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-copyright">&copy; 2017 All Rights Reserved.</div>
      </div>
    </div>
  </footer>
  `,
})
