'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="footer-content"
        >
          {/* Contact Info */}
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <Mail size={18} className="footer-contact-icon" />
                <span className="footer-contact-text">kalyan.23aiml@cambridge.edu.in</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={18} className="footer-contact-icon" />
                <span className="footer-contact-text">Bangalore</span>
              </div>
              <div className="footer-contact-item">
                <Linkedin size={18} className="footer-contact-icon" />
                <span className="footer-contact-text">https://in.linkedin.com/in/kalyan-v-65a423226</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-services-list">
              <li className="footer-service-item">Video Editing</li>
              <li className="footer-service-item">Motion Graphics</li>
              <li className="footer-service-item">Color Grading</li>
              <li className="footer-service-item">Audio Post-Production</li>
              <li className="footer-service-item">Documentary Editing</li>
            </ul>
          </div>

          {/* About */}
          <div className="footer-section">
            <h3>About</h3>
            <p className="footer-about-text">
              Professional video editor with a passion for storytelling through visual media. 
              Experienced in creating compelling content across various formats and platforms.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="footer-bottom"
        >
          <p className="footer-copyright">
            © {currentYear} Kalyan V
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;