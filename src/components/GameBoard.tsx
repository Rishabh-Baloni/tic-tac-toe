import React, { useState } from 'react';

export type CellValue = 'X' | 'O' | null;

interface GameBoardProps {
  board: CellValue[];
  onCellClick: (index: number) => void;
  winningLine: number[] | null;
  disabled: boolean;
  xMarker: string;
  oMarker: string;
  currentPlayer: 'X' | 'O';
}

const GameBoard: React.FC<GameBoardProps> = ({ board, onCellClick, winningLine, disabled, xMarker, oMarker, currentPlayer }) => {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  return (
  <div className="grid grid-cols-3 gap-2 w-80 h-80 bg-[#18162a]/80 rounded-2xl border border-[#00F6FF66] shadow-xl backdrop-blur-md relative">
      {board.map((cell, idx) => {
  const isWinning = winningLine?.includes(idx);
  const display = cell === 'X' ? xMarker : cell === 'O' ? oMarker : '';
  const preview = !cell && hoverIdx === idx ? (currentPlayer === 'X' ? xMarker : oMarker) : '';
        return (
          <button
            key={idx}
            className={`w-24 h-24 flex items-center justify-center text-5xl font-extrabold rounded-xl transition-all duration-300 border focus:outline-none relative
              border-[#00F6FF66] bg-[#18162a]/80
              ${cell === 'X' ? 'text-[#00F6FF]' : cell === 'O' ? 'text-[#FF00C1]' : 'text-white/30'}
              ${isWinning ? 'winning-laser' : ''}
              ${!cell && !disabled ? 'hover:border-[#00F6FF] hover:bg-[#00F6FF22] hover:scale-105 cursor-pointer' : ''}
              animate-fade-in`}
            onClick={() => onCellClick(idx)}
            disabled={!!cell || disabled}
            style={{ transition: 'background 0.3s, transform 0.3s', textShadow: cell === 'X' ? '0 0 4px #00F6FF44' : cell === 'O' ? '0 0 4px #FF00C144' : 'none'} }
            onMouseEnter={() => setHoverIdx(idx)}
            onMouseLeave={() => setHoverIdx(null)}
          >
            <span className="inline-block animate-marker-fade">{display}</span>
            {!cell && preview && (
              <span className={`absolute text-4xl font-extrabold pointer-events-none opacity-60 animate-fade-in ${currentPlayer === 'X' ? 'text-[#00F6FF]' : 'text-[#FF00C1]'}`}>{preview}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default GameBoard;

// Tailwind custom animations
// Add to globals.css:
// @keyframes fade-in { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
// .animate-fade-in { animation: fade-in 0.4s ease; }
// @keyframes marker-fade { from { opacity: 0; } to { opacity: 1; } }
// .animate-marker-fade { animation: marker-fade 0.3s ease; }
