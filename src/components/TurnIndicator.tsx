import React from 'react';

interface TurnIndicatorProps {
  currentPlayer: 'X' | 'O';
  xMarker: string;
  oMarker: string;
  name: string;
}

const TurnIndicator: React.FC<TurnIndicatorProps> = ({ currentPlayer, xMarker, oMarker, name }) => {
  const marker = currentPlayer === 'X' ? xMarker : oMarker;
  return (
    <div className="flex items-center gap-3 text-xl font-semibold mb-6 animate-fade-in">
      <span
        className={`inline-block text-3xl font-extrabold animate-marker-fade ${currentPlayer === 'X' ? 'text-[#00F6FF]' : 'text-[#FF00C1]'}`}
        style={{ textShadow: currentPlayer === 'X' ? '0 0 4px #00F6FF44' : '0 0 4px #FF00C144' }}
      >
        {marker}
      </span>
      <span
        className={`font-extrabold ${currentPlayer === 'X' ? 'text-[#00F6FF]' : 'text-[#FF00C1]'}`}
        style={{ textShadow: currentPlayer === 'X' ? '0 0 2px #00F6FF44' : '0 0 2px #FF00C144' }}
      >
        {`${name}'s Turn`}
      </span>
    </div>
  );
};

export default TurnIndicator;
