import React, { useState } from 'react';

interface PlayerNameFormProps {
  onSubmit: (xName: string, oName: string) => void;
  isAI: boolean;
}

const PlayerNameForm: React.FC<PlayerNameFormProps> = ({ onSubmit, isAI }) => {
  const [xName, setXName] = useState('Player X');
  const [oName, setOName] = useState(isAI ? 'AI' : 'Player O');

  return (
    <form
      className="flex flex-col items-center gap-6 mb-10 w-full max-w-sm p-8 bg-[#18162a]/80 rounded-2xl shadow-xl border border-[#00F6FF66] backdrop-blur-md"
      onSubmit={e => {
        e.preventDefault();
        onSubmit(xName.trim() || 'Player X', oName.trim() || (isAI ? 'AI' : 'Player O'));
      }}
    >
      <input
        className="w-full px-5 py-4 rounded-xl border border-[#00F6FF66] bg-[#0C0A1D]/80 text-lg font-semibold focus:outline-none focus:border-[#FF00C1] text-[#00F6FF] placeholder:text-white/60"
        type="text"
        value={xName}
        onChange={e => setXName(e.target.value)}
        placeholder="Enter name for Player X"
        maxLength={16}
      />
      {!isAI && (
        <input
          className="w-full px-5 py-4 rounded-xl border border-[#FF00C166] bg-[#0C0A1D]/80 text-lg font-semibold focus:outline-none focus:border-[#00F6FF] text-[#FF00C1] placeholder:text-white/60"
          type="text"
          value={oName}
          onChange={e => setOName(e.target.value)}
          placeholder="Enter name for Player O"
          maxLength={16}
        />
      )}
      <button
        type="submit"
        className="w-full py-4 mt-4 bg-gradient-to-r from-[#00F6FF] to-[#FF00C1] text-white rounded-xl shadow-xl border-2 border-[#00F6FF] hover:scale-105 hover:brightness-110 active:scale-95 transition font-bold text-xl"
      >
        Start Game
      </button>
    </form>
  );
};

export default PlayerNameForm;
