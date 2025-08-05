'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0 
}) => {
  const cardClasses = [
    'card',
    hover ? 'card-hoverable' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cardClasses}
    >
      {children}
    </motion.div>
  );
};

export default Card;