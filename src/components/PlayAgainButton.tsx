import React from 'react';

interface PlayAgainButtonProps {
  onClick: () => void;
}

const PlayAgainButton: React.FC<PlayAgainButtonProps> = ({ onClick }) => (
  <button
    className="mt-8 px-8 py-4 bg-accent text-white text-xl font-bold rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 animate-fade-in"
    onClick={onClick}
  >
    Play Again
  </button>
);

export default PlayAgainButton;
