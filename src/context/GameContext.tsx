"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CellValue } from '../components/GameBoard';

interface GameContextType {
  mode: 'pvp' | 'pvai' | null;
  setMode: (mode: 'pvp' | 'pvai' | null) => void;
  board: CellValue[];
  setBoard: (board: CellValue[]) => void;
  currentPlayer: 'X' | 'O';
  setCurrentPlayer: (player: 'X' | 'O') => void;
  status: 'X' | 'O' | 'draw' | null;
  setStatus: (status: 'X' | 'O' | 'draw' | null) => void;
  winningLine: number[] | null;
  setWinningLine: (line: number[] | null) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGameContext must be used within GameProvider');
  return context;
};

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<'pvp' | 'pvai' | null>(null);
  const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [status, setStatus] = useState<'X' | 'O' | 'draw' | null>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  return (
    <GameContext.Provider value={{ mode, setMode, board, setBoard, currentPlayer, setCurrentPlayer, status, setStatus, winningLine, setWinningLine }}>
      {children}
    </GameContext.Provider>
  );
};
