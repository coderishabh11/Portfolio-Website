import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { message } from '../../assets';
import './contact.css';
import '../../websiteTheme.css';

const ContactMe = ({ theme, setTheme }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Handle animation based on scroll position
  useEffect(() => {
    if (!hasAnimated) {
      const handleScroll = () => {
        const element = document.getElementById('contact');
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
          setHasAnimated(true);
          window.removeEventListener('scroll', handleScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial load check

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [hasAnimated]);

  // Handle input changes and validate email
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === 'email') {
      validateEmail(value);
    }
  };

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Email should be a valid email address.');
    } else {
      setEmailError('');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError || !form.name || !form.message) {
      alert('Please fill out all fields correctly.');
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_9g318ub', // Your service ID
        'template_c5pkf0m', // Your template ID
        {
          from_name: form.name,
          to_name: 'Rishabh Sagar',
          from_email: form.email,
          to_email: 'rishabh04sagar@gmail.com',
          message: form.message,
        },
        'FoEII6w1EqMnm1UNb' // Your public key
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h1
        className="display-3 contact-heading heading-text"
        initial={{ opacity: 0, y: 50 }} // Slide in from bottom
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        say HELLO.
      </motion.h1>
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="contact-box contact-field"
        initial={{ opacity: 0, x: 100 }} // Slide in from right
        animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="contact-fields">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="heading-text border-contact contact-input"
            required
          />
          <div className="email-field-wrapper">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="border-contact heading-text contact-input"
              required
            />
            {emailError && <p className="error-text">{emailError}</p>}
          </div>
        </div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="heading-text border-contact contact-textarea"
          required
        />
        <button
          type="submit"
          className="border-contact contact-button heading-text"
        >
          {loading ? 'Sending...' : <b>SEND</b>}
          <img src={message} alt="Message" className="message-icon" />
        </button>
      </motion.form>
    </section>
  );
};

export default ContactMe;
