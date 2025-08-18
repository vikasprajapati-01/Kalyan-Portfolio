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
    { icon: Clock, number: '7+', label: 'Years Experience' },
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
                My editing journey began back in 2018, when I first started experimenting with creating and sharing content on YouTube and social media. What started with cubing videos quickly grew into client projects and personal creative challenges, giving me hands-on experience with different formats and storytelling approaches.
              </p>
              <p>
                With over 7 years of professional editing experience, I&apos;ve worked on a wide range of projects &mdash; from corporate documentaries to music videos &mdash; each bringing unique challenges and opportunities to refine my craft. Alongside this, I&apos;ve consistently explored content creation on my own platforms, shaping my ability to connect with audiences and experiment with creative styles.
              </p>
              <p>
                For me, editing is more than just arranging clips &mdash; it&apos;s about building emotion, rhythm, and narrative flow that makes the story resonate. I&apos;m currently looking to collaborate with creative teams that value quality, originality, and storytelling impact.
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