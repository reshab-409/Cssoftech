import React, { useEffect } from 'react';
import '../CommonComponents/PopUpForm/Style.css';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="banner inner-banner contact-banner">
        <div className="container">
          <div className="banner-content">
            <h2>
              Request <br />
              for Proposal
            </h2>
            <div className="banner-cta-block">
              <h2>Tell us about you and your project to start the conversation!</h2>
            </div>
          </div>
          <div className="contact-form">
            <div className="row">
              <div className="col-md-6">
                <div className="group">
                  <input type="text" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Full Name*</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="group">
                  <input type="text" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Email*</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="group">
                  <input type="text" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Phone Number*</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="group">
                  <input type="text" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Approx Budget*</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="group">
                  <textarea></textarea>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>A short description of your project*</label>
                </div>
              </div>

              {/* Choose File */}
              <div className="cf">
                <p>Upload file less than 10 MB</p>
                <input type="file" name="file" id="file" />
              </div>

              <div className="lbl">
                <div className="wrpr">
                  <input type="checkbox" className='chkbox' />
                  <p>Send me a copy of NDA</p>
                </div>
                <div className="wrpr">
                  <input type="checkbox" className='chkbox' />
                  <p>I want to get the latest offers and updates</p>
                </div>
              </div>
              <div className="col-md-12">
                <button className="button-primary">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-address">
        <div className="address-container">
          <div className="">
            <h2>Find us</h2>
            <div className="address-block-container">
              <div className="block-item">
                <a href="tel:+91 7003990798">+91 7003990798</a>
                <a href="mailto:info@cssoftech.com">info@cssoftech.com</a>
                <address>
                  address
                  <br />
                  5 Sreema road, Dum dum cantonment, kolkata, India
                </address>
              </div>
              <div className="block-item">
                <p>Sign up for our Newsletter</p>
                <form action="">
                  <div className="input-group">
                    <input type="email" placeholder="Enter email address" />
                    <button className="button">
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="block-item">
                <p>Get in Touch</p>
                <div className="social">
                  <a href="https://www.facebook.com/Creationsoul">
                    <span className="icon-facebook"></span>
                  </a>
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                  <a href="https://www.linkedin.com/company/97397466/admin/feed/posts">
                    <span className="icon-linkedin"></span>
                  </a>
                  <a href="#">
                    <span className="icon-you-tube"></span>
                  </a>
                  <a href="#">
                    <span className="icon-instagram"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
