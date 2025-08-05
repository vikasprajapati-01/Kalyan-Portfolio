'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Clock, Tag } from 'lucide-react';
import Image from 'next/image';
import Card from '@/ui/Card/Card';
import VideoPlayer from '@/ui/VideoPlayer/VideoPlayer';
import { categories, videos } from '@/data/video';
import { Video } from '@/types';
import './VideoShowcase.css';

// Helper function to extract Google Drive file ID from URL
const getGoogleDriveFileId = (url: string): string | null => {
  if (!url.includes('drive.google.com')) {
    return null;
  }
  
  // Regular Google Drive URL
  if (url.includes('/file/d/')) {
    const fileId = url.split('/file/d/')[1].split('/')[0];
    return fileId;
  }
  
  // Shared folder URL
  if (url.includes('drive.google.com/open')) {
    const urlObj = new URL(url);
    const fileId = urlObj.searchParams.get('id');
    return fileId;
  }
  
  return null;
};

// Helper function to get Google Drive thumbnail URL
const getGoogleDriveThumbnailUrl = (url: string): string | null => {
  const fileId = getGoogleDriveFileId(url);
  if (!fileId) return null;
  
  // Google Drive thumbnails use this format
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
};

const VideoShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const featuredVideos = videos.filter(video => video.featured);

  return (
    <section id="videos" className="video-showcase">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="video-showcase-header"
        >
          <h2 className="video-showcase-title">
            <span className="video-showcase-title-gradient">My Work</span>
          </h2>
          <p className="video-showcase-subtitle">
            A collection of my best video editing work showcasing various styles, 
            techniques, and storytelling approaches across different genres.
          </p>
        </motion.div>

        {/* Featured Videos */}
        {featuredVideos.length > 0 && (
          <div className="video-showcase-featured">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="video-showcase-section-title"
            >
              <span className="video-showcase-featured-text">Featured</span> Work
            </motion.h3>
            <div className="video-showcase-featured-grid">
              {featuredVideos.map((video, index) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={() => setSelectedVideo(video)}
                  delay={index * 0.1}
                  featured={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="video-showcase-filters"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`
                video-showcase-filter-button
                ${selectedCategory === category
                  ? 'video-showcase-filter-button-active'
                  : 'video-showcase-filter-button-inactive'
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="video-showcase-grid"
          >
            {filteredVideos.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={() => setSelectedVideo(video)}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="video-showcase-empty"
          >
            <p className="video-showcase-empty-text">
              No videos found in this category.
            </p>
          </motion.div>
        )}

        {/* Video Player Modal */}
        {selectedVideo && (
          <VideoPlayer
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </div>
    </section>
  );
};

interface VideoCardProps {
  video: Video;
  onClick: () => void;
  delay?: number;
  featured?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  video, 
  onClick, 
  delay = 0, 
  featured = false 
}) => {
  return (
    <Card delay={delay} className="video-card">
      <div>
        {/* Thumbnail */}
        <div className="video-card-thumbnail">
          {video.videoUrl.endsWith('.mp4') || video.videoUrl.startsWith('/') ? (
            <video 
              src={video.videoUrl} 
              className="video-card-video-thumbnail"
              muted 
              playsInline
              preload="metadata"
            />
          ) : video.videoUrl.includes('drive.google.com') ? (
            <div className="video-card-gdrive-thumbnail-wrapper">
              {getGoogleDriveThumbnailUrl(video.videoUrl) ? (
                <Image 
                  src={getGoogleDriveThumbnailUrl(video.videoUrl) || ''}
                  alt={video.title}
                  className="video-card-gdrive-thumbnail"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    // Fallback if thumbnail loading fails
                    const target = e.target as HTMLImageElement;
                    if (target) {
                      target.style.display = 'none';
                      target.parentElement?.classList.add('video-card-gdrive-placeholder');
                    }
                  }}
                />
              ) : (
                <Play size={48} className="video-card-placeholder-icon" />
              )}
              <div className="video-card-gdrive-info">
                <p className="video-card-placeholder-title">{video.title}</p>
                <p className="video-card-placeholder-category">{video.category}</p>
              </div>
            </div>
          ) : (
            <div className="video-card-placeholder">
              <Play size={48} className="video-card-placeholder-icon" />
              <p className="video-card-placeholder-title">{video.title}</p>
              <p className="video-card-placeholder-category">{video.category}</p>
            </div>
          )}
          
          {/* Play Button Overlay */}
          <div className="video-card-overlay">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="video-card-play-button"
              onClick={onClick}
            >
              <Play size={24} fill="currentColor" />
            </motion.button>
          </div>

          {/* Featured Badge */}
          {featured && (
            <div className="video-card-featured-badge">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="video-card-content">
          <h3 className="video-card-title">
            {video.title}
          </h3>
          <p className="video-card-description">
            {video.description}
          </p>
          
          <div className="video-card-meta">
            <div className="video-card-meta-item">
              <Tag size={14} className="video-card-category-icon" />
              <span>{video.category}</span>
            </div>
            <div className="video-card-meta-item">
              <Clock size={14} className="video-card-duration-icon" />
              <span>{video.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoShowcase;