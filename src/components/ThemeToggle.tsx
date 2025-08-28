import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur border border-gray-300 dark:border-gray-700 shadow-lg text-lg font-bold transition-all"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
