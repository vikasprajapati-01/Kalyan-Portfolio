'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import Card from '@/ui/Card/Card';
import Button from '@/ui/Button/Button';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
            email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        setError(data.message || 'Submission failed.');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kalyan.23aiml@cambridge.edu.in',
      href: 'mailto:kalyan.23aiml@cambridge.edu.in',
    },
    // {
    //   icon: Phone,
    //   label: 'Phone',
    //   value: '+1 (555) 123-4567',
    //   href: 'tel:+15551234567',
    // },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kalyan-v',
      href: 'https://in.linkedin.com/in/kalyan-v-65a423226',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <h2 className="contact-title">
            <span className="contact-title-gradient">Let&apos;s Work Together</span>
          </h2>
          <p className="contact-subtitle">
            Ready to bring your vision to life? I&apos;m always excited to collaborate 
            on new projects and explore creative opportunities.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-info"
          >
            <h3>Get In Touch</h3>
            
            <div className="contact-info-list">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="contact-info-item">
                      <div className="contact-info-content">
                        <div className="contact-info-icon-container">
                          <Icon className="contact-info-icon" size={24} />
                        </div>
                        <div className="contact-info-details">
                          <h4>{info.label}</h4>
                          <a
                            href={info.href}
                            className="contact-info-link"
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="contact-availability"
            >
              <h4>Available For</h4>
              <div className="contact-availability-tags">
                {[
                  'Full-time Positions',
                  'Freelance Projects',
                  'Contract Work',
                  'Collaboration',
                ].map((item) => (
                  <span key={item} className="contact-availability-tag">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 contact-form">
              <h3>Send a Message</h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="contact-form-success"
                >
                  <CheckCircle className="contact-form-success-icon" size={20} />
                  <span className="contact-form-success-text">Message sent successfully!</span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="contact-form-success" style={{ backgroundColor: '#fef2f2', borderColor: '#fecaca' }}
                >
                  <span style={{ color: '#dc2626', fontSize: '0.875rem' }}>{error}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="contact-form-fields">
                <div className="contact-form-row">
                  <div className="contact-form-field">
                    <label htmlFor="name" className="contact-form-label">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="contact-form-input"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="contact-form-field">
                    <label htmlFor="email" className="contact-form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="contact-form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="contact-form-field">
                  <label htmlFor="subject" className="contact-form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="contact-form-input"
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="contact-form-field">
                  <label htmlFor="message" className="contact-form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="contact-form-textarea"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="gradient"
                  className="contact-form-submit"
                  size="large"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="contact-form-loading"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;