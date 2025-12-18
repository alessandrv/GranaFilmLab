'use client';

import Image from 'next/image';
import Noise from './Noise';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <Image
            alt="GranaLab - Analog Film Laboratory"
            width={600}
            height={200}
            className="w-full max-w-2xl h-auto drop-shadow-2xl"
            priority
          />
        </div>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto drop-shadow-lg">
          Professional film developing and processing for photographers who value the timeless quality of analog photography
        </p>
        <button
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-xl"
        >
          Explore Our Services
        </button>
      </div>
    </section>
  );
}
