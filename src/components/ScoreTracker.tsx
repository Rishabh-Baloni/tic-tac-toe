import React from 'react';

interface ScoreTrackerProps {
  xScore: number;
  oScore: number;
  onReset: () => void;
  xName: string;
  oName: string;
}

const ScoreTracker: React.FC<ScoreTrackerProps> = ({ xScore, oScore, onReset, xName, oName }) => (
  <div className="flex items-center justify-center gap-10 mb-10 p-6 bg-[#18162a]/80 rounded-2xl shadow-xl border border-[#00F6FF66] backdrop-blur-md">
    <div className="flex flex-col items-center relative">
      <span className="text-lg font-bold text-[#00F6FF] mb-1" style={{textShadow: '0 0 2px #00F6FF88'}}>{xName}</span>
      <span className="text-4xl font-extrabold text-[#00F6FF] px-6 py-3 rounded-xl bg-[#0C0A1D] border border-[#00F6FF66]" style={{textShadow: '0 0 4px #00F6FF44'}}>{xScore}</span>
    </div>
    <div className="flex flex-col items-center relative">
      <span className="text-lg font-bold text-[#FF00C1] mb-1" style={{textShadow: '0 0 2px #FF00C188'}}>{oName}</span>
      <span className="text-4xl font-extrabold text-[#FF00C1] px-6 py-3 rounded-xl bg-[#0C0A1D] border border-[#FF00C166]" style={{textShadow: '0 0 4px #FF00C144'}}>{oScore}</span>
    </div>
    <button
      className="px-5 py-2 bg-gradient-to-r from-[#00F6FF] to-[#FF00C1] text-white rounded-full shadow-xl border-2 border-[#00F6FF] hover:scale-105 hover:brightness-110 active:scale-95 transition font-semibold ml-6"
      onClick={onReset}
    >
      Reset Score
    </button>

  </div>
);

export default ScoreTracker;
