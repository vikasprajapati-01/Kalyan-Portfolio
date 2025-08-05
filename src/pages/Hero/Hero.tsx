'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/ui/Button/Button';
import { ChevronDown, Play } from 'lucide-react';
import { useIsClient } from '@/hooks/clientHook';
import './Hero.css';

import Kalyan from '../../../public/kalyan1.jpg'

const Hero: React.FC = () => {
  const isClient = useIsClient();

  const handleScrollToVideos = () => {
    const element = document.querySelector('#videos');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Predefined positions to avoid hydration mismatch
  const particlePositions = [
    { x: 25, y: 20, color: '#0548C6' },
    { x: 75, y: 30, color: '#E10430' },
    { x: 15, y: 60, color: '#0548C6' },
    { x: 85, y: 25, color: '#E10430' },
    { x: 45, y: 80, color: '#0548C6' },
    { x: 65, y: 15, color: '#E10430' },
    { x: 35, y: 45, color: '#0548C6' },
    { x: 55, y: 70, color: '#E10430' },
    { x: 90, y: 50, color: '#0548C6' },
    { x: 10, y: 35, color: '#E10430' },
    { x: 70, y: 85, color: '#0548C6' },
    { x: 30, y: 10, color: '#E10430' },
    { x: 80, y: 65, color: '#0548C6' },
    { x: 20, y: 75, color: '#E10430' },
    { x: 60, y: 40, color: '#0548C6' },
    { x: 40, y: 55, color: '#E10430' },
    { x: 95, y: 20, color: '#0548C6' },
    { x: 5, y: 90, color: '#E10430' },
    { x: 50, y: 5, color: '#0548C6' },
    { x: 85, y: 95, color: '#E10430' },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background" />
      
      {isClient && (
        <div className="hero-animated-background">
          {particlePositions.map((particle, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: particle.color,
                opacity: 0.2,
                left: particle.x + '%',
                top: particle.y + '%',
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: (i % 5) * 0.4,
              }}
            />
          ))}
        </div>
      )}

      {/* Floating Geometric Shapes */}
      {isClient && (
        <div className="hero-floating-shapes">
          <motion.div
            className="hero-shape-1"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="hero-shape-2"
            animate={{
              y: [0, 40, 0],
              rotate: [45, 225, 405],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="hero-shape-3"
            animate={{
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}

      <div className="container">
        <div className="hero-content-split">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-image-section"
          >
            <div className="hero-image-wrapper">
              <Image
                src={Kalyan}
                alt="Kalyan V - Professional Video Editor"
                className="hero-image"
                width={300}
                height={300}
              />
              <div className="hero-image-ring"></div>
              <div className="hero-image-ring-2"></div>
              <div className="hero-image-background-glow"></div>
            </div>
            
            {/* Floating decorative elements around image */}
            <div className="hero-image-decorations">
              <motion.div
                className="hero-decoration-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="hero-decoration-2"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="hero-decoration-3"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="hero-text-section">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="hero-title">
                <span className="hero-title-gradient">Kalyan V</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="hero-subtitle">
                Professional Video Editor
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-description"
            >
              Bringing stories to life through compelling visual narratives. 
              Experienced in creating engaging content across documentaries, 
              commercials, and digital media with a keen eye for detail and storytelling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="hero-buttons"
            >
              <Button onClick={handleScrollToVideos} variant="gradient" size="large">
                <Play size={20} style={{ marginRight: '0.5rem' }} />
                View My Work
              </Button>
              {/* <Button onClick={handleScrollToContact} variant="outline" size="large">
                Get In Touch
              </Button> */}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="hero-scroll-indicator"
          onClick={handleScrollToVideos}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="hero-scroll-text">Scroll to explore</span>
            <ChevronDown size={24} className="hero-scroll-icon" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;