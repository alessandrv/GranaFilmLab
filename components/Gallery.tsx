'use client';

import { useState, useEffect } from 'react';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: string;
}

export default function Gallery() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  const instagramUsername = 'granafilmlab';

  useEffect(() => {
    // For now, we'll use placeholder images
    // To fetch real Instagram data, you'll need to set up Instagram Basic Display API
    // or use a service like Instagram Graph API
    
    // Placeholder data
    const placeholderPosts = Array(6).fill(null).map((_, index) => ({
      id: `post-${index}`,
      media_url: '', // Empty for now - will show placeholder
      permalink: `https://instagram.com/${instagramUsername}`,
      caption: `Sample post ${index + 1}`,
      media_type: 'IMAGE'
    }));
    
    setPosts(placeholderPosts);
    setLoading(false);
  }, [instagramUsername]);

  return (
    <section id="gallery" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Gallery</h2>
        <p className="text-xl text-gray-400 mb-16">
          Follow our latest work on{' '}
          <a
            href={`https://instagram.com/${instagramUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors underline"
          >
            @{instagramUsername}
          </a>
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          {loading ? (
            // Loading state
            Array(6).fill(null).map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-white/5 border border-white/10 animate-pulse"
              />
            ))
          ) : (
            // Instagram posts grid
            posts.map((post, index) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center group hover:border-white/30 transition-all overflow-hidden relative"
              >
                {post.media_url ? (
                  <img
                    src={post.media_url}
                    alt={post.caption || `Instagram post ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  // Placeholder
                  <div className="text-center">
                    <div className="text-6xl mb-2 opacity-20 group-hover:opacity-30 transition-opacity">📷</div>
                    <p className="text-sm text-gray-500">Instagram Post {index + 1}</p>
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm">View on Instagram</span>
                </div>
              </a>
            ))
          )}
        </div>
        
       
      </div>
    </section>
  );
}
