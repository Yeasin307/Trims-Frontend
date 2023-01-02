import PropTypes from "prop-types";
import React, { Fragment, useRef } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";

const Contact = ({ location }) => {
  const { pathname } = location;
  const { addToast } = useToasts()
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const handleContactForm = e => {
    const fullName = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const address = addressRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;
    const product = { fullName, email, phone, address, subject, message }

    axios.post(`${process.env.REACT_APP_SERVER_API}/leads/create`, product)
      .then(data => {
        if (data?.data === "Created lead successfully!") {
          addToast("Thanks for contact with us!", {
            appearance: 'success',
            autoDismiss: true,
            autoDismissTimeout: 10000
          })
          e.target.reset();
        }
      })
    e.preventDefault();
  }

  return (
    <Fragment>
      <MetaTags>
        <title>Trim | Contact</title>
        <meta
          name="description"
          content="contact page of trim tex bd"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Contact
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+012 345 678 102</p>
                      <p>+012 345 678 102</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:info@trimtex-bd.com">
                          info@trimtex-bd.com
                        </a>
                      </p>
                      <p>
                        <a href="mailto:info@trimtex-bd.com">
                          info@trimtex-bd.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>House-15, Road-05</p>
                      <p>Block-Dha, Section-12</p>
                      <p>Mirpur, Pallabi, Dhaka</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a href="//facebook.com">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="//thumblr.com">
                          <i className="fa fa-tumblr" />
                        </a>
                      </li>
                      <li>
                        <a href="//vimeo.com">
                          <i className="fa fa-vimeo" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form onSubmit={handleContactForm} className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          required
                          placeholder="Name*"
                          type="text"
                          ref={nameRef}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          required
                          placeholder="Email*"
                          type="email"
                          ref={emailRef}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          placeholder="Phone"
                          type="tel"
                          ref={phoneRef}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          placeholder="Address"
                          type="text"
                          ref={addressRef}
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          required
                          placeholder="Subject*"
                          type="text"
                          ref={subjectRef}
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          required
                          placeholder="Your Message*"
                          defaultValue={""}
                          ref={messageRef}
                        />
                        <button className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
            <div className="contact-map mt-10">
              <LocationMap latitude="23.7625" longitude="90.3785" />
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object
};

export default Contact;
