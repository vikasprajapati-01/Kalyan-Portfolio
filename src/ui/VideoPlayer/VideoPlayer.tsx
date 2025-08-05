'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Video } from '@/types';
import './VideoPlayer.css';

// Helper function to convert Google Drive link to embed URL
const getGoogleDriveEmbedUrl = (url: string) => {
  // Extract file ID from Google Drive URL
  // Example input: https://drive.google.com/file/d/1234567890abcdef/view?usp=sharing
  // Example output: https://drive.google.com/file/d/1234567890abcdef/preview
  
  // Regular Google Drive URL
  if (url.includes('/file/d/')) {
    const fileId = url.split('/file/d/')[1].split('/')[0];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  
  // Shared folder URL
  if (url.includes('drive.google.com/open')) {
    const fileId = new URL(url).searchParams.get('id');
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
  }
  
  // Return the original URL if we can't parse it
  return url;
};

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
            ) : video.videoUrl.includes('drive.google.com') ? (
              <iframe
                src={getGoogleDriveEmbedUrl(video.videoUrl)}
                className="video-frame"
                allow="autoplay; fullscreen"
                allowFullScreen
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