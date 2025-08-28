import React from 'react';

interface MainMenuProps {
  onSelectMode: (mode: 'pvp' | 'pvai') => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onSelectMode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0C0A1D] relative overflow-hidden">
      {/* Animated cosmic dust or grid effect (placeholder, can be implemented with CSS or canvas) */}
      <div className="absolute inset-0 pointer-events-none z-0 animate-[pulse_20s_linear_infinite]" style={{background: 'radial-gradient(circle at 20% 30%, #00F6FF22 0%, transparent 70%), radial-gradient(circle at 80% 70%, #FF00C122 0%, transparent 70%)'}}></div>
  <h1 className="text-7xl font-extrabold mb-14 text-transparent bg-clip-text bg-gradient-to-r from-[#00F6FF] via-white to-[#FF00C1] drop-shadow-[0_0_16px_#00F6FF] font-mono tracking-widest neon-chrome">Tic-Tac-Toe</h1>
  <div className="flex flex-col gap-8 w-full max-w-xs p-8 bg-white/10 border border-[#00F6FF] rounded-3xl shadow-2xl backdrop-blur-lg" style={{boxShadow: '0 0 32px #00F6FF44, 0 0 8px #FF00C144'}}>
        <button
          className="w-full py-6 text-2xl font-bold rounded-2xl bg-gradient-to-r from-[#00F6FF] to-[#0096c7] text-white shadow-xl border-2 border-[#00F6FF] hover:scale-105 hover:brightness-110 active:scale-95 transition-all duration-300"
          onClick={() => onSelectMode('pvp')}
        >
          Play vs. Friend
        </button>
        <button
          className="w-full py-6 text-2xl font-bold rounded-2xl bg-gradient-to-r from-[#FF00C1] to-[#c700ff] text-white shadow-xl border-2 border-[#FF00C1] hover:scale-105 hover:brightness-110 active:scale-95 transition-all duration-300"
          onClick={() => onSelectMode('pvai')}
        >
          Play vs. AI
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
