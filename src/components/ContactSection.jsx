import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGlobe, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="py-5" id="contact">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-8 text-center">
            <span className="h5 text-muted">Get in Touch</span>
            <h2 className="display-5">Contact</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5">
            <div className="d-flex align-items-center mb-4">
              <FaGlobe className="me-3 fs-4 text-primary" />
              <div>
                <p className="mb-0"><a href="mailto:samproff2002.snb@gmail.com" className="text-decoration-none">samproff2002.snb@gmail.com</a></p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4">
              <FaMapMarkerAlt className="me-3 fs-4 text-primary" />
              <div>
                <p className="mb-0">Current Address: NO 28 Nii Nortey Crescent PALM Rd, Haatso Police Station, Accra, Ghana</p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <FaPhone className="me-3 fs-4 text-primary" />
              <div>
                <p className="mb-0"><a href="tel:+233596308848" className="text-decoration-none">+233 596308848</a></p>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" required />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Subject" required />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows="7" placeholder="Message" required></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
