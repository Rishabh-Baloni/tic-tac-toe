import React from 'react';

const AIThinking: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;
  return (
    <div className="flex items-center gap-2 mb-4 animate-fade-in">
      <span className="text-accent font-bold">AI is thinking</span>
      <span className="flex gap-1">
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse delay-100"></span>
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></span>
      </span>
    </div>
  );
};

export default AIThinking;
