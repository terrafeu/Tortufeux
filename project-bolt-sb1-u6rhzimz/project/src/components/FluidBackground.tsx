import React from 'react';

const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Left side - Pink */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-pink-50" />
      
      {/* Right side - Blue */}
      <div className="absolute inset-0 bg-gradient-to-l from-blue-100 to-blue-50" />
      
      {/* Fluid wave separator */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fce7f3" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#e0e7ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          <path
            d="M0,400 C200,300 400,500 600,400 C800,300 1000,500 1200,400 L1200,800 L0,800 Z"
            fill="url(#waveGradient)"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="M0,400 C200,300 400,500 600,400 C800,300 1000,500 1200,400 L1200,800 L0,800 Z;
                      M0,400 C200,500 400,300 600,400 C800,500 1000,300 1200,400 L1200,800 L0,800 Z;
                      M0,400 C200,300 400,500 600,400 C800,300 1000,500 1200,400 L1200,800 L0,800 Z"
            />
          </path>
          
          <path
            d="M0,450 C300,350 600,550 900,450 C1050,400 1150,500 1200,450 L1200,800 L0,800 Z"
            fill="url(#waveGradient)"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="M0,450 C300,350 600,550 900,450 C1050,400 1150,500 1200,450 L1200,800 L0,800 Z;
                      M0,450 C300,550 600,350 900,450 C1050,500 1150,400 1200,450 L1200,800 L0,800 Z;
                      M0,450 C300,350 600,550 900,450 C1050,400 1150,500 1200,450 L1200,800 L0,800 Z"
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default FluidBackground;