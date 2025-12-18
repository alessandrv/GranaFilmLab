import Noise from '@/components/Noise';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Services />
        <Process />
        <Gallery />
        <Pricing />
        <Contact />
      </main>
      
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} GranaFilmLab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
