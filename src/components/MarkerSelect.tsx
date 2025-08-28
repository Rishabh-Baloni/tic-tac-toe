import React from 'react';

export type MarkerOption = {
  label: string;
  value: string;
};

export const markerOptions: MarkerOption[] = [
  { label: 'Classic X', value: '✖️' },
  { label: 'Classic O', value: '⭕' },
  { label: 'Emoji X', value: '❌' },
  { label: 'Emoji O', value: '🟢' },
  { label: 'Cat', value: '🐱' },
  { label: 'Dog', value: '🐶' },
  { label: 'Triangle', value: '▲' },
  { label: 'Circle', value: '●' },
];

interface MarkerSelectProps {
  player: 'X' | 'O';
  selected: string;
  onSelect: (marker: string) => void;
}

const MarkerSelect: React.FC<MarkerSelectProps> = ({ player, selected, onSelect }) => (
  <div className="flex flex-col items-center mb-8 w-full">
    <span className="block text-2xl font-bold mb-6 text-white tracking-wide">Choose marker for {player === 'X' ? 'Player X' : 'Player O'}</span>
    <div className="grid grid-cols-4 gap-6 justify-center w-full max-w-xl mb-2">
      {markerOptions.filter((_, i) => i % 2 === (player === 'X' ? 0 : 1)).map(option => (
        <button
          key={option.value}
          className={`flex items-center justify-center h-16 w-16 rounded-xl bg-[#18162a]/80 border-2 text-3xl font-bold shadow-xl transition-all duration-200
            ${selected === option.value ? 'border-[#00F6FF] scale-110 ring-4 ring-[#00F6FF44]' : 'border-[#444] hover:border-[#00F6FF] hover:scale-105'}
            focus:outline-none`}
          onClick={() => onSelect(option.value)}
        >
          {option.value === '▲' ? (
            <span style={{ color: '#00F6FF' }}>▲</span>
          ) : option.value === '●' ? (
            <span style={{ color: '#FF00C1' }}>●</span>
          ) : (
            option.value
          )}
        </button>
      ))}
    </div>
  </div>
);

export default MarkerSelect;
