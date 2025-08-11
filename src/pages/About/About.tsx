'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/ui/Card/Card';
import { Award, Clock, Users, Zap } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    { name: 'Adobe Premiere Pro' },
    { name: 'After Effects' },
    { name: 'DaVinci Resolve' },
    { name: 'Final Cut Pro' },
    { name: 'Motion Graphics' },
    { name: 'Color Grading' },
    { name: 'CapCut' },
    { name: 'VN' },
  ];

  const achievements = [
    { icon: Award, number: '15+', label: 'Projects Completed' },
    { icon: Clock, number: '4+', label: 'Years Experience' },
    { icon: Users, number: '12+', label: 'Happy Clients' },
    { icon: Zap, number: '4+', label: 'Awards Won' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <h2 className="about-title">
            <span className="about-title-gradient">About Me</span>
          </h2>
          <p className="about-subtitle">
            Passionate video editor with extensive experience in creating compelling visual stories 
            that engage audiences and deliver powerful messages.
          </p>
        </motion.div>

        <div className="about-content">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-story"
          >
            <h3>My Story</h3>
            <div className="about-story-text">
              <p>
                With over 4 years of professional experience in video editing, I&apos;ve had the privilege 
                of working on diverse projects ranging from corporate documentaries to music videos, 
                each presenting unique challenges and creative opportunities.
              </p>
              <p>
                My journey began with a passion for storytelling and evolved into a professional 
                career focused on crafting compelling narratives through the art of editing. 
                I believe that great editing is invisible &mdash; it serves the story while enhancing 
                the emotional impact of every frame.
              </p>
              <p>
                Currently seeking new opportunities to bring creative visions to life and 
                collaborate with teams who value quality, creativity, and attention to detail.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-skills"
          >
            <h3>Skills & Expertise</h3>
            <div className="about-skills-list">
              {skills.map((skill) => (
                <div key={skill.name} className="about-skill-item">
                  <div className="about-skill-header">
                    <span className="about-skill-name">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-achievements"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={achievement.label} delay={index * 0.1} className="about-achievement-card">
                <div className="about-achievement-icon-container">
                  <Icon className="about-achievement-icon" size={32} />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    delay: index * 0.1 + 0.3 
                  }}
                  className="about-achievement-number"
                >
                  {achievement.number}
                </motion.div>
                <p className="about-achievement-label">{achievement.label}</p>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;