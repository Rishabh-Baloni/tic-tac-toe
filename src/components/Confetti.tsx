import React from 'react';

const Confetti: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Simple confetti burst using emojis for performance */}
      <div className="absolute w-full h-full flex flex-wrap justify-center items-center">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="text-4xl animate-confetti"
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 0.5}s`,
            }}
          >
            🎉
          </span>
        ))}
      </div>
    </div>
  );
};

export default Confetti;
