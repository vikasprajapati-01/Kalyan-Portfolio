'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Video } from '@/types';
import './VideoPlayer.css';

interface VideoPlayerProps {
  video: Video;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="video-overlay"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="video-container"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="video-close-button"
          >
            <X size={32} />
          </button>
          
          <div className="video-frame-container">
            {video.videoUrl.endsWith('.mp4') || video.videoUrl.startsWith('/') ? (
              <video
                src={video.videoUrl}
                className="video-frame"
                controls
                autoPlay
                title={video.title}
              />
            ) : (
              <iframe
                src={video.videoUrl}
                className="video-frame"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={video.title}
              />
            )}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="video-info"
          >
            <h3 className="video-title">{video.title}</h3>
            <p className="video-description">{video.description}</p>
            <div className="video-meta">
              <span>{video.category}</span>
              <span>{video.duration}</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoPlayer;