import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const bubbles = [
    { size: 'w-32 h-32', delay: '0s', duration: '6s', left: '10%', top: '20%', name: 'SCORES' },
    { size: 'w-24 h-24', delay: '1s', duration: '8s', left: '70%', top: '15%', name: 'CDES' },
    { size: 'w-40 h-40', delay: '2s', duration: '7s', left: '20%', top: '60%', name: 'CDES' },
    { size: 'w-28 h-28', delay: '0.5s', duration: '9s', left: '80%', top: '70%', name: 'CDES' },
    { size: 'w-36 h-36', delay: '3s', duration: '5s', left: '50%', top: '40%', name: 'CDES' },
    { size: 'w-20 h-20', delay: '1.5s', duration: '10s', left: '15%', top: '85%', name: 'CDES' },
    { size: 'w-44 h-44', delay: '2.5s', duration: '6s', left: '75%', top: '45%', name: 'CDES' },
    { size: 'w-30 h-30', delay: '1.8s', duration: '7.5s', left: '40%', top: '25%', name: 'RES' },
    { size: 'w-26 h-26', delay: '2.2s', duration: '8.5s', left: '60%', top: '80%', name: 'NORIAPDF' },
  ];

  const links = [
    'https://score.jfsteacher.fr/',
    'https://cdes.jfsteacher.fr/',
    'https://cdes.jfsteacher.fr/',
    'https://cdes.jfsteacher.fr/',
    'https://cdes.jfsteacher.fr/',
    'https://cdes.jfsteacher.fr/',
    'https://cdes.jfsteacher.fr/',
    'https://rechercheuai.jfsteacher.fr/',
    'https://noriapdf.jfsteacher.fr/',
  ];

  const handleBubbleClick = (index: number) => {
    window.open(links[index], '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden relative">
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Title */}
        <h1 
          className="text-8xl md:text-9xl font-bold text-white mb-12 tracking-wider drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
          style={{
            textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          JFS
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-xl md:text-2xl mb-16 text-center max-w-2xl leading-relaxed">
          Cliquez sur les bulles pour accéder aux ressources
        </p>

        {/* Interactive bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {bubbles.map((bubble, index) => (
            <div
              key={index}
              className={`absolute ${bubble.size} pointer-events-auto cursor-pointer group`}
              style={{
                left: bubble.left,
                top: bubble.top,
                animation: `float ${bubble.duration} ease-in-out infinite`,
                animationDelay: bubble.delay,
              }}
              onClick={() => handleBubbleClick(index)}
            >
              <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-white/20">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-white/90 font-bold text-xs mb-1 group-hover:text-white transition-colors duration-300">
                    {bubble.name}
                  </span>
                  <ExternalLink 
                    size={bubble.size.includes('20') ? 10 : bubble.size.includes('24') ? 12 : bubble.size.includes('28') || bubble.size.includes('30') ? 14 : 16} 
                    className="text-white/70 group-hover:text-white transition-colors duration-300" 
                  />
                </div>
              </div>
              
              {/* Ripple effect on hover */}
              <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* Mouse follower effect */}
        <div
          className="fixed w-6 h-6 bg-white/20 rounded-full pointer-events-none z-50 mix-blend-difference"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transition: 'all 0.1s ease-out',
          }}
        />

        {/* Call to action */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm animate-bounce">
          ↑ Bulles interactives ↑
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          33% { 
            transform: translateY(-20px) rotate(5deg);
          }
          66% { 
            transform: translateY(10px) rotate(-3deg);
          }
        }
        
        body {
          cursor: none;
        }
        
        * {
          cursor: none;
        }
      `}</style>
    </div>
  );
}

export default App;