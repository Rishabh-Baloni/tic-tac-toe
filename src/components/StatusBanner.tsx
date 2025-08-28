import React from 'react';

interface StatusBannerProps {
  status: 'X' | 'O' | 'draw' | null;
  marker?: string;
  name?: string;
}

const StatusBanner: React.FC<StatusBannerProps> = ({ status, marker, name }) => {
  if (!status) return null;
  let message = '';
  if (status === 'draw') message = "It's a Draw!";
  else message = `${marker} (${name}) Wins!`;
  return (
    <div className="text-4xl font-extrabold text-primary mb-6 animate-fade-in drop-shadow-xl">
      {message}
    </div>
  );
};

export default StatusBanner;
