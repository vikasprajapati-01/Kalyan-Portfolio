'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="header-logo"
          >
            Kalyan V
          </motion.div>
          
          <Navigation />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;