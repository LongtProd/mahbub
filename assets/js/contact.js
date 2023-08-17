diseContactForm()
function diseContactForm() {
    let contactForm = document.getElementById('contactForm');
    let FORMCIPY = `<div class="container">
<div class="row">
  <div class="col-lg-6 offset-lg-3">
    <div class="section-heading">
      
      <h4>Feel free to message us</h4>
    </div>
  </div>
  <div class="col-lg-10 offset-lg-1">
    <form name="contact"  id="contact"  action="" onsubmit="return false;" method="post">
      <div class="row">
        <div class="col-lg-6">
          <fieldset>
            <input type="text" name="firstname" id="firstname" placeholder="First Name" autocomplete="off"  required>
          </fieldset>
        </div>
        <div class="col-lg-6">
          <fieldset>
            <input type="text" name="lastname" id="lastname" placeholder="Last Name" autocomplete="off" required>
          </fieldset>
        </div>
        <div class="col-lg-6">
          <fieldset>
            <input type="text" name="company" id="company" placeholder="Company" autocomplete="off"  required>
          </fieldset>
        </div>
        <div class="col-lg-6">
          <fieldset>
            <input type="text" name="designation" id="designation" placeholder="Designation" autocomplete="off" required>
          </fieldset>
        </div>
        <div class="col-lg-6">
          <fieldset>
            <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Email" autocomplete="off" required>
          </fieldset>
        </div>
        <div class="col-lg-6">
          <fieldset>
            <input type="text" name="phone" id="phone" placeholder="Phone" autocomplete="off"  required>
          </fieldset>
        </div>
        <div class="col-lg-12">
          <fieldset>
            <textarea name="message" id="message" placeholder="Your Message" required=""></textarea>
          </fieldset>
        </div>
        <div class="col-lg-6">
                <fieldset>
                  <input type="text" name="pin" id="pin" placeholder="Captcha" autocomplete="off" required>
                </fieldset>
              </div>
			  <div class="col-lg-6">
                <fieldset>
                  <div id="captcha"></div>
                </fieldset>
              </div>
        <div class="col-lg-12">
          <fieldset>
            <button type="submit" id="form-submit" class="orange-button">Send Message</button>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
</div>
</div>`;

contactForm.innerHTML = FORMCIPY;
}





