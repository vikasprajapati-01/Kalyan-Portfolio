'use client';

import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Hero from '@/pages/Hero/Hero';
// import About from '@/pages/About/About';
import VideoShowcase from '@/pages/VideoShowcase/VideoShowCase';
// import Contact from '@/pages/Contact/Contact';
import PageTransition from './Animation';

export default function Home() {
  return (
    <PageTransition>
      <Header />
      <main>
        <Hero />
        {/* <About /> */}
        <VideoShowcase />
        {/* <Contact /> */}
      </main>
      <Footer />
    </PageTransition>
  );
}