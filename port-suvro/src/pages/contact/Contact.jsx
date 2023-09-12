import React from 'react';

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { FiSend } from 'react-icons/fi';

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">Let's <span>Connect</span></h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Get in touch.</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className="info__title">Email</span>
                <h4 className="info__desc">codexsuvro@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className="info__title">Call</span>
                <h4 className="info__desc">+91-9874774674</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a href="https://www.facebook.com/suvrodeep.debnath" className='contact__social-link'>
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/suvrodeepdebnath" className='contact__social-link'>
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/codexsuvro" className='contact__social-link'>
              <FaTwitter />
            </a>
            <a href="https://github.com/codexsuvro" className='contact__social-link'>
              <FaGithub />
            </a>
          </div>
        </div>
        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder='Your Name'
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder='Your Email'
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder='Your Subject'
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea placeholder='Your Message' className="form__control textarea"></textarea>
          </div>
          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;